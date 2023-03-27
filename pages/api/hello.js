export default function handler(req, res) {
  res.status(200).json({ msg: "sample lambda message from serverless" });
}
