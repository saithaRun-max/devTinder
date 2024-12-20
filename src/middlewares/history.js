const userHistory = (req, res, next) =>{
    console.log("history tokenization getting")
    const token = "xyz";
    const isValidateToken = token === "xyz";

    if (!isValidateToken){
        res.status(402).send("unauthorized token")
    }else{
        next();
    }
};

module.exports = { userHistory};