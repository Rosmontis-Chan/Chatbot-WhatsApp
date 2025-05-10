const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

app.get("/webhook", (req, res) => {
  const mode = req.query["hub.mode"];
  const token = req.query["hub.verify_token"];
  const challenge = req.query["hub.challenge"];

  if (mode && token) {
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      console.log("WEBHOOK_VERIFIED");
      res.status(200).send(challenge);
    } else {
      res.sendStatus(403);
    }
  }
});

app.post("/webhook", async (req, res) => {
  const body = req.body;

  if (body.object === "whatsapp_business_account") {
    for (const entry of body.entry) {
      const changes = entry.changes[0];
      const messageData = changes.value.messages?.[0];

      if (messageData) {
        const sender = messageData.from;
        const message = messageData.text.body;

        await axios.post(
          `https://graph.facebook.com/v19.0/${process.env.NUMBER_ID}/messages`,
          {
            messaging_product: "whatsapp",
            to: sender,
            text: { body: `Hi! You said: "${message}"` },
          },
          {
            headers: {
              Authorization: `Bearer ${PAGE_ACCESS_TOKEN}`,
              "Content-Type": "application/json",
            },
          }
        );
      }
    }

    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Webhook running on port ${PORT}`));
