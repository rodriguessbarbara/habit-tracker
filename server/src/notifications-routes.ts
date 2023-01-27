import { FastifyInstance } from "fastify";
import WebPush from "web-push";
import { z } from "zod";

const publicKey =
  "BEVw5EOBWt7Bo0hKLqEG8a6j611x_N6s4J0H9VIadUBdLk6ChcqVos4gJLTQvvVJ603_1nKLJD7WvTBuDcvhJlg";
const privateKey = "eqkKFY2un-SQUWqR75AiZ1er4Xcb43YTOUUpE9547MI";

WebPush.setVapidDetails("http://localhost:3333", publicKey, privateKey);

export async function notificationRoutes(app: FastifyInstance) {
  app.get("/push/public_key", () => {
    return {
      publicKey,
    };
  });

  app.post("/push/register", (request, reply) => {

    return reply.status(201).send();
  });

  app.post("/push/send", async (request, reply) => {
    // console.log(request.body);

    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        }),
      }),
    });

    const { subscription } = sendPushBody.parse(request.body);

    setTimeout(() => {
      WebPush.sendNotification(subscription, 'Curtindo o Habit Tracker? :)')
    }, 5000)

    return reply.status(201).send();
  });
}
