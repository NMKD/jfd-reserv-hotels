const TokenService = require("../services/token.service");

module.exports = (req, res, next) => {
  // OPTIONS проверяет доступность сервера
  if (req.method === "OPTIONS") {
    return next();
  }
  if (!req.headers.authorization) {
    return next();
  }

  try {
    // Bearer
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
    const data = TokenService.validateAccess(token);
    if (!data) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = data;
    next();
  } catch (e) {
    console.error(e);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
