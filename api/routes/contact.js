const { Router } = require("express");
const  mailer  = require("../nodemailer");

const router = Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    let info = await mailer.sendMail({
      from: "magui.romero@hotmail.com.ar",
      to: "maguiromeroa@gmail.com",
      subject: "MMorph",
      html: `<div>
            <h2>from: ${name}</h2>
            <h4>email: ${email}</h4>
            <p>message: <br/>${message}</p>
          </div>`,
    });

    res.json({ error: null, message: "Message sent successfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
