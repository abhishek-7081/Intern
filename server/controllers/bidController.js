import Bid from "../models/Bid.js";
import Gig from "../models/Gig.js";
import mongoose from "mongoose";

export const hireBid = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const bid = await Bid.findById(req.params.bidId).session(session);
    const gig = await Gig.findById(bid.gigId).session(session);

    if (gig.status === "assigned") {
      await session.abortTransaction();
      return res.status(400).json("Already hired");
    }

    gig.status = "assigned";
    bid.status = "hired";
    await gig.save({ session });
    await bid.save({ session });

    await Bid.updateMany(
      { gigId: gig._id, _id: { $ne: bid._id } },
      { status: "rejected" },
      { session }
    );

    await session.commitTransaction();
    res.json("Freelancer hired successfully");
  } catch (err) {
    await session.abortTransaction();
    res.status(500).json(err.message);
  } finally {
    session.endSession();
  }
};
