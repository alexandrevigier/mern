import { Schema } from 'mongoose';

const messageSchema = new Schema({
  message: {
    type: String,
    default: ''
  },
  username: {
    type: String.Types.ObjectId,
    ref: 'User'
  }
});

export default messageSchema;