import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://simran:123456@ds251287.mlab.com:51287/chattymac",
  "bodyLimit": "100kb"
}
