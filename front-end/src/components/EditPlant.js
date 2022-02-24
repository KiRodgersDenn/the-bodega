import axios from 'axios';
import { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

const API = process.env.REACT_APP_API_URL

function EditPlant(){
    const [plant, setPlant] = useState({

    })
    const {index} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API}/plants/${index}`)
        .then((res)=>{
            setPlant(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[index])

    const handleTextChange = (event) =>{
        setPlant({ ...plant, [event.target.id]: event .target.value});
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios.put(`${API}/plants/${index}`, plant)
        .then(()=>{
            navigate('/plants')
        }).catch((err)=>{
            console.log(err)
        })
    };
    return(
        <div className='edit-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                    <input
                    id='name'
                    value={plant.name}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Name of Plant!'
                />
                
                <label htmlFor='botanicalName'>Botanical Name:</label>
                    <input
                    id='botanicalName'
                    value={plant.botanicalName}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Botanical Name'
                />

                <label htmlFor='native_area'>Native Area:</label>
                    <input
                    id='native_area'
                    value={plant.native_area}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Native Area'
                />

                <label htmlFor='family'>Family:</label>
                    <input
                    id='family'
                    value={plant.family}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Family'
                />

                <label htmlFor='plant_type'>Plant Type:</label>
                    <input
                    id='plant_type'
                    value={plant.plant_type}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Plant Type'
                />

                <label htmlFor='sun_exposure'>Sun Exposure:</label>
                    <input
                    id='sun_exposure'
                    value={plant.sun_exposure}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='Sun Exposure'
                />

                {/* <label htmlFor='image'>Image:</label>
                    <input
                    id='image'
                    value={plant.image}
                    type='text'
                    onChange={handleTextChange}
                    placeholder='http://'
                    pattern='http[s]*://.+'
                /> */}

                <input type = 'submit' />
     
            </form>
        </div>
    )
}

export default EditPlant;