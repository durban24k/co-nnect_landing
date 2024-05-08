module.exports.landingPage = (req,res)=>{
     res.set('Cache-Control','public, max-age=300, s-maxage=600')
     res.render("home",{layout:false})
}

module.exports.onBoardPage = (req,res)=>{
     // res.set('Cache-Control','public, max-age=300, s-maxage=600')
     res.render("onboard",{layout:false})
}

module.exports.brandPage = (req,res)=>{
     // res.set('Cache-Control','public, max-age=300, s-maxage=600')
     res.render("advertisers",{layout:false})
}

module.exports.creatorsPage = (req,res)=>{
     res.set('Cache-Control','public, max-age=180, s-maxage=300')
     res.render("content_creators",{layout:false})
}

module.exports.privacyPolicyPage = (req,res)=>{
     res.set('Cache-Control','public, max-age=180, s-maxage=300')
     res.render("privacy_center",{layout:false})
}