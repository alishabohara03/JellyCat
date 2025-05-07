// import jwt from 'jsonwebtoken'

// const authUser = async(req,res,next)=>{
//     const {token}=req.headers
//     if(!token){
//         return res.json({success:false,message: "Not authorized login again"});
//     }
//     try{
//         const token_decode = jwt.verify(token, process.env.JWT_SECRET)
//         req.body.userId = token_decode.id
//         next()

//     }catch(error){
//         console.log(error.message);
//         res.json({success:false,message: error.message})
//     }
// }

// export default authUser







import jwt from 'jsonwebtoken'

const authUser = async(req,res,next)=>{
    const {token}=req.headers
    if(!token){
        return res.json({success:false,message: "Not authorized login again"});
    }
    try{
        const token_decode = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        req.body.userId = token_decode.id
        next()

    }catch(error){
        console.log(error.message);
        res.json({success:false,message: error.message})
    }
}

export default authUser


