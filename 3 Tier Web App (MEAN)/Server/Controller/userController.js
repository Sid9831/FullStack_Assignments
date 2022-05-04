import User from '../model/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const secret = process.env.SECRET
const userError = "User already Exists"

export const addUser = async (req, res) => {
    const { name, email, phone, password } = req.body

    try {
        const olduser = await User.findOne({ email })

        if (olduser) {
            return res.status(400).json({ message: userError });
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await User.create({ name, email, phone, password: hashedPassword })

        res.status(201).json({ user, message: "User Created successfully" })
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials. Please try again" })
        }

        const token = jwt.sign({ email: user.email, id: user._id }, secret , { expiresIn: "1h" })

        res.status(200).json({ user, token })
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
}