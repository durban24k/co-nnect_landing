module.exports.loginPage = (req,res)=>{
     // res.set('Cache-Control','public, max-age=300, s-maxage=600')
     res.render("auth/login",{layout:false})
}

module.exports.signupPage = (req,res)=>{
     // res.set('Cache-Control','public, max-age=300, s-maxage=600')
     res.render("auth/signup",{layout:false})
}