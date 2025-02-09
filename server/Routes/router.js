const express = require("express");
const router = new express.Router();
const users = require("../models/userSchema");
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASS
    }
});
router.post("/register", async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
        return res.status(401).json({ status: 401, error: "All Input Required" });
    }

    try {
        const preuser = await users.findOne({ email: email });

        if (preuser) {
            const usermessage = await preuser.Messagesave(message);
            console.log(usermessage);
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Thank you for submitting your response",
                text: "Your Response Has Been Submitted"
            };
            transporter.sendMail(mailOptions,(error, info)=>{
                if(error){
                    console.log("error" + error)
                }
                else{
                    console.log("Email sent"+info.response)
                    res.status(201).json({status:201, message:"Email sent successfully"})
                }
            })
        } else {
            const finalUser = new users({ name, email, message });
            const storeData = await finalUser.save();
            const mailOptions = {
                from: process.env.EMAIL,
                to: email,
                subject: "Thank you for submitting your response",
                text: "Your Response Has Been Submitted"
            };
            transporter.sendMail(mailOptions,(error, info)=>{
                if(error){
                    console.log("error" + error)
                }
                else{
                    console.log("Email sent"+info.response)
                    res.status(201).json({status:201, message:"Email sent successfully"})
                }
            })
            res.status(201).json({status:201, storeData})
        }
    } catch (error) {
        res.status(401).json({status:401, error:"All Input required"});
        console.log("catch error")
    }
});



module.exports = router;