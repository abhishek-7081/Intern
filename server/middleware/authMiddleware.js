import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.cookies.token;
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });

  if (!token) return res.status(401).json("Not authorized");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = decoded;
  next();
};
