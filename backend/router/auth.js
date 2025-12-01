const { hash, compare } = require("bcrypt");
const authModel = require("../controller/authController");

// register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await authModel.findOne({ email });

    // hash password (omitted for brevity)
    const passwordHash = await hash(password, 10); // Replace with actual hashing

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user adding with password hash
    const newUser = new authModel({ name, email, password: passwordHash });

    // Save user to database
    await newUser.save();

    // Respond with success message
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check required fields
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    // 2️⃣ Find user by email only (NOT password)
    const user = await authModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 3️⃣ Compare passwords using bcrypt
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 4️⃣ Login success
    res.status(200).json({
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser };
