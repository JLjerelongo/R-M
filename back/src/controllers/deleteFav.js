const { Favorite } = require('../DB_connection')

const deleteFav = async(req,res) => {
    try {
        const { id } = req.params

        const userDelete = await Favorite.findByPk(id)
        await userDelete.destroy()

        const allFavorite = await Favorite.findAll()
        return res.status(200).json(allFavorite)
    } 
    catch (error) {
        return res.status(500).json({ error: error.message})
    }
}

module.exports = deleteFav