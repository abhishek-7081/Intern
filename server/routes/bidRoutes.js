import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import Bid from "../models/Bid.js";
import { hireBid } from "../controllers/bidController.js";

const router = express.Router();

router.post("/", protect, async (req, res) => {
  const bid = await Bid.create({
    ...req.body,
    freelancerId: req.user.id
  });
  res.json(bid);
});

router.get("/:gigId", protect, async (req, res) => {
  const bids = await Bid.find({ gigId: req.params.gigId }).populate("freelancerId", "name");
  res.json(bids);
});

router.patch("/:bidId/hire", protect, hireBid);

export default router;
