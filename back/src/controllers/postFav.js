const { Favorite } = require('../DB_connection')

const postFav = async(req, res) => {
    const { id, name, origin, status, image, species, gender } = req.body;

    if(name){
    try {
        const favorite = await Favorite.findOrCreate({
            where:{id, name, origin, status, image, species, gender},
            defaults:{id, name, origin, status, image, species, gender}
        })
        console.log(favorite);
        const allFavorites = await Favorite.findAll();

        res.status(200).json(allFavorites);

    } catch (error) {
         res.status(500).json({ error: error.message })
        }
    }   
else res.status(404).json({error: 'Faltan datos'})
}

module.exports = postFav;