const axios = require("axios")

const getVaccinationByDistrict = async function (req, res) {
    try {
        let district = req.query.districtId
        console.log(district)
        let date = req.query.date
        let options = {
            methode: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`


        }


        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getSortedCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []

        for ( i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=19e7825cf0d1c6e924fda47fc07d8662`)
            console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
        }
        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })

        console.log(sorted);
        res.status(200).send({ status: true, data: sorted })

    }
    catch(error){
        console.log(error)
        res.status(500).send({status: false, msg: "server error"})
    }
}


let createMemes=async function(req,res){
    try{
        let memeId= req.params.template_id
        let text0=req.params.text0
        let text1= req.params.text1
        let userName= req.params.userName
        let password= req.params.password
        console.log(`The memes details are: ${template} ${text0} ${text1} ${userName} ${password}`)

        let options={
            methode:"post",
            url:`https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&anilmandal0678&password=Ajay0678@`
        }
        let  result=await axios.post(options)
        console.log(result.data)
        res.status(200).send({status: true, msg: result.data})

    }

    catch(error){
        console.log(error)
        res.status(500).send({status: false, msg: "server error"})
    }
}




module.exports.getVaccinationByDistrict = getVaccinationByDistrict;
module.exports.getSortedCities=getSortedCities
module.exports.createMemes=createMemes
