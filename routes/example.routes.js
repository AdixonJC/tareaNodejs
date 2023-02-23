const { Router } = require('express')

const router = Router();

router.get('/', (req , res) => {


    res.status(200).json({
        status:"success",
        data: "aqui van los datos consultados exitosamente"
    })
})

router.post('/', (req, res) => {
    const {body} = req

    res.status(200).json({
        status: "success",
        data: body
    })
})


module.exports = {exampleRouter : router}