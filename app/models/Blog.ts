import mongoose from "mongoose";

export interface Blogs extends mongoose.Document {
  fileName: string,
  dateWritten: Date,
}

const BlogSchema = new mongoose.Schema<Blogs>({
  fileName: {
    type: String,
  },
  dateWritten: {
    type: Date,
  }
})

export default mongoose.models.Blog || mongoose.model<Blogs>("Blog", BlogSchema);
