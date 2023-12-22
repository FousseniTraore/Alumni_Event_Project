import mongoose from "mongoose";

// event schema that will be used as structure for all events
const eventSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: Date, required: true },
    // createdBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // }, // Get ID of the user who create the event
  },
  {
    timestamps: true,
  }
);

// Event model that will be used to create all events
export const Event = mongoose.model("Event", eventSchema);
