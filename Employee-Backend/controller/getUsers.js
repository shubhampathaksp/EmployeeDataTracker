const User = require("../models/User");
exports.getUser = async (req, res) => {
	try {
		const userData = await User.find({});
		return res.status(200).json({
			success:true,
			status:201,
			message:"Data fetched Successfully",
			data:userData
		})
	} catch (error) {
		console.log(error);
		return res.status(500).json({
			success:false,
			status:500,
			message:error.message
		})
	}
};
