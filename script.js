require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '1h' // expires in 1 hour
  });
  return token;
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return { error: 'Token expired or invalid' };
  }
};

// 🔄 Example usage:
const user = { id: 1, name: 'Amulya' };
const token = createToken(user);
console.log("🔐 JWT Token:", token);

const result = verifyToken(token);
console.log("✅ Decoded Data:", result);
