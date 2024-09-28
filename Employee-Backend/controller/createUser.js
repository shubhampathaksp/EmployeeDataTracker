const User = require("../models/User");

exports.createUser = async (req, res) => {
  try {
    console.log("req body", req.body);
    const { name, email, title, department, role } = req.body;
    if (!name || !email || !title || !role || !department) {
      console.log("not all fields...");
      return res.status(400).json({
        success:false,
        status: 400,
        message: "Please fill all the details",
      });
    }
    const user = await User.create({
      name,
      email,
      title,
      department,
      role,
      image: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
    });
    return res.status(200).json({
      success:true,
      status: 201,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      success:false,
      status: 500,
      message: error.message,
    });
  }
};
