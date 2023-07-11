const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        token: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
