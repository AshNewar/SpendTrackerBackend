import USER from "../model/model.js"

export const getDetails = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await USER.findOne({ email: email });
        if (!user) return res.status(400).json({ success: false, msg: "User not found" });
        res.status(200).json({ success: true, user: user });

    } catch (error) {
        console.log(error);

    }
}


export const createUser = async (req, res) => {
    try {

        // console.log(req.body)

        const { email, name, income } = req.body;
        const user = await USER.findOne({ email: email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }
        const newuser = await USER.create({ email: email, name: name, monthlyIncome: income });
        await newuser.save();
        res.status(201).json({ success: true, user: newuser, message: 'User Registered Successfully' });

    } catch (error) {
        console.log(error);

    }
}