import bcrypt from 'bcryptjs';
import { User } from '../models/user.model.js';
import { generateToken } from '../utils/ganerateToken.js';

export const register = async (req, res)=>{
    try {
        const {name,email,password}=req.body;
        if(!name||!email||!password){
            return res.status(400).json({message:"please fields are required"})
        }
        console.log(name,email,password)
        const user =await User.findOne({email});
        
        if (user){
            return res.status(400).json({message:"user all ready exists with this email"})
        }

        const hashedPassword=await bcrypt.hash(password,10)
        await User.create({
            name,
            email,
            password: hashedPassword,
        });
        return res.status(201).json({
            success:true,
            massage:"user created successfully"
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            massage:"Internal server errorrr",
      
        })
    }
}

export const login = async (req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email|| !password){
            return res.status(400).json({
                success:false,
                message:"please fields are required"
            })
        }
        const user =await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success:false,
                message:"incorrect email or password"
            })
        }
        const isPasswordMatch= await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            return res.status(400).json({
                success:false,
                message:"incorrect email or password" 
            })
        }
        generateToken(res,user,`welcome back ${user.name}`)
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            massage:"failed to login "
        })
        
    }
}