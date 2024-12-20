const adminAuth = (req, res, next)=> {
    console.log("Admin auth is getting checked!");
    const token = "abc";
    const isAdminAuthorized = token == "abc";
    if(!isAdminAuthorized){
        res.status(401).send("Un authorized token")
    }else{
        next();
    }
};

module.exports = {
    adminAuth
};