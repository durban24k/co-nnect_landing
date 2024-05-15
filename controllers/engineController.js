module.exports.engineSearchPage = (req,res)=>{
     // res.set('Cache-Control','public, max-age=300, s-maxage=600')
     res.render("engine/snitch_engine",{layout:false})
}

module.exports.engineResultPage = (req,res)=>{
     // res.set('Cache-Control','public, max-age=300, s-maxage=600')
     res.render("engine/snitch_results",{layout:false})
}