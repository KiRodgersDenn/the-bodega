const db = require("../db/dbConfig.js");

const getAllPlants = async()=>{
    try{
        const allPlants = await db.any("SELECT * FROM plants");
        return allPlants;
    } catch(err){
        return err;
    }
}

const getOnePlant = async(id)=>{
    try{
        const plant = await db.one("SELECT * FROM plants WHERE id=$1", id);
        return plant;
    }catch(err){
        return err;
    }
}

const createPlant = async(plant)=>{
    try{
        const newPlant = await db.one("INSERT INTO plants(name,image,botanicalName,price,low_light) VALUES ($1,$2,$3,$4,$5) RETURNING *", [plant.name,plant.image,plant.botanicalName,plant.price,plant.low_light]);
        return newPlant;
    } catch(err){
        return err;
    }
}

const deletePlant = async(id)=>{
    try{
        const deletedPlant = await db.one("DELETE FROM plants WHERE id=$1 RETURNING *", id );
        return deletedPlant;
    } catch(err){
        return err;
    }
}

const updatePlant= async(id,plant)=>{
    try{
        const updatedPlant = await db.one(
            "UPDATE plants SET name=$1, image=$2, botanicalName=$3, price=$4, low_light=$5 WHERE id=$6 RETURNING *",
            [plant.name, plant.image, plant.botanicalName, plant.price, plant.low_light, id]
        );
        return updatedPlant;
    }catch(err){
        return err;
    }
}


module.exports = {
    getAllPlants,
    getOnePlant,
    createPlant,
    deletePlant,
    updatePlant
};