const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(
      res.status(401).json({
        status: "fail",
        message: "You are not authenticated!!",
      })
    );
  }
  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) {
      return next(
        res.status(403).json({
          status: "fail",
          message: "Token is not valid!!",
        })
      );
    } else {
      req.user = user;
    }
    next();
  });
};

exports.verifyUser = (req, res, next) => {
  console.log(req.user);
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id && req.user.isActive == true) {
      next();
    } else {
      return next(
        res.status(403).json({
          status: "fail",
          message: "Your are not authorized!!",
        })
      );
    }
  });
};
