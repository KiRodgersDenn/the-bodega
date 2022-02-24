import axios from 'axios';
import {useState, useEffect} from 'react';
import Plant from './Plant';

const API = process.env.REACT_APP_API_URL;

function AllPlants(){
    const [plant, setPlants] = useState([]);

    useEffect(()=>{
        axios.get(API + '/plants')
        .then((res)=>{
            setPlants(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            {plant.map((plant)=>{
                return <Plant key={plant.id} plant={plant}/>
            })}
        </div>
    )
}

export default AllPlants;