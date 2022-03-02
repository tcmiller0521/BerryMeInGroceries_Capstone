import UserModel from "../models/user.js";

export const checkDuplicateEmail = (req, res, next) => {
    UserModel.findOne({
        email: req.body.email
    }).exec((err, email) => {
        if (err){
            res.status(500).send({ message: "error" });
            return;
        }

        if (email) {
            res.status(400).send({ message: "Email already in use"});
            return;
        }

        next();
    })
};
