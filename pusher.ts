import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1552798",
  key: "e1b06c334442c026767b",
  secret: process.env.PUSHER_SECRET!,
  cluster: "ap2",
  useTLS: true,
});

export const clientPusher = new ClientPusher("e1b06c334442c026767b", {
  cluster: "ap2",
  forceTLS: true,
});
