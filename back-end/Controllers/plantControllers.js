const express =require('express');
const plants = express.Router();
const {getAllPlants, getOnePlant, createPlant, deletePlant, updatePlant}= require('../queries/plants.js')
// const {checkName, capitalization} = require('../validation/helpers.js')


//INDEX
plants.get('/', async (req,res)=>{ 
    try{
        const allPlants = await getAllPlants();
        if(allPlants[0]){
            res.status(200).json(allPlants);
           
        } else{
            res.status(500).json({err:'server error'})
            console.log(allPlants)
        }        
    }catch(error){
        console.log(error)
    }
})

//SHOW 
plants.get('/:id', async (req,res)=>{
    const {id} = req.params;
    try{
        const plant = await getOnePlant(id);
        if(plant.id){
            res.status(200).json(plant);
        } else{
            res.status(404).json({error: "not found"})
        }
    } catch(err){
        console.log(error)
    }
})
//POST/CREATE
plants.post('/', async(req,res)=>{
    let {body} =req;
    // body = {...body, is_healthy: confirmHealth(body), name: capitalization(body.name) }
    try{
        const createdPlant = await createPlant(body);
        if(createdPlant.id){
            res.status(200).json(createdPlant);
        } else {
            res.status(500).json({error:"creation error"})
        }
    }catch(error){
        console.log(error)
    }
})


//DELETE 
plants.delete("/:id",async (req,res)=>{
    const {id} = req.params
    try{
        const deletedPlant = await  deletePlant(id);
        if(deletedPlant.id){
            res.status(200).json(deletedPlant);
        } else{
            res.status(404).json({error: "Not found"})
        }
    } catch(err){
        console.log(err)
    }
})

//UPDATE

plants.put("/:id", async(req,res)=>{
    const {id} = req.params;
    let {body} = req;

    const updatedPlant = await updatePlant(id,body);
    if(updatedPlant.id){
        res.status(200).json(updatedPlant);
    } else {
        res.status(404).json({error: 'Plant not found'})
    }
})


module.exports = plants;