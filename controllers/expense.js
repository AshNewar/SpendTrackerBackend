import USER from "../model/model.js";

export const getExpense = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await USER.findOne({ email: email });
        if (!user) return res.status(400).json({ message: 'No such user' });
        const expense = user.expense;
        res.status(200).json({ success: true, expense: expense, income: user.monthlyIncome });

    } catch (error) {
        console.log(error);

    }

}

export const createExpense = async (req, res) => {
    try {
        const { email } = req.params;
        const data = req.body;
        const user = await USER.findOne({ email: email });
        user.expense.push(data);
        await user.save();
        res.status(200).json({ user });

    } catch (error) {
        console.log(error);

    }


}