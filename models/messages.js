import { model } from 'mongoose';


export const messagesSchema = {
  name: String,
};

export const Messages = model('Messages', messagesSchema);
mongoose.connect(uri, options);