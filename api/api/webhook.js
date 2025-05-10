import axios from "axios";

export default async function handler(req, res) {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;
  const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;
  const NUMBER_ID = process.env.NUMBER_ID;

  if (req.method === "GET") {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      return res.status(200).send(challenge);
    } else {
      return res.sendStatus(403);
    }
  }

  if (req.method === "POST") {
    const body = req.body;

    if (body.object === "whatsapp_business_account") {
      for (const entry of body.entry) {
        const messageData = entry.changes[0]?.value?.messages?.[0];
        if (messageData) {
          const sender = messageData.from;
          const message = messageData.text.body;

          await axios.post(
            `https://graph.facebook.com/v19.0/${NUMBER_ID}/messages`,
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
      return res.sendStatus(200);
    }

    return res.sendStatus(404);
  }

  return res.status(405).send("Method Not Allowed");
}
