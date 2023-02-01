import React from 'react';
import axios from 'axios';
import './Google.css';
function Google({getSheetData}) {

    const[sheetData, setSheetData] = React.useState({'Name':'',Age:'',Course:'',Collage:'',Phone:''})

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('https://sheet.best/api/sheets/3b6cb36d-1ff0-4951-925a-12873cf3fe0c',sheetData)
        .then(res=>{
            console.log(res)
            alert('Data Stored')
        })
        getSheetData();
        setSheetData({'Name':'',Age:'',Course:'',Collage:'',Phone:''})
    }

  return (
    <div>
      <form className='p-3 box'onSubmit={handleSubmit}>
        <div className='mb-3'>
            <label className='form-label' htmlFor='name' >Name:</label>
            <input className='form-control' id='name' type='text' value={sheetData.Name}
            onChange={(e)=>setSheetData({...sheetData, 'Name':e.target.value})}/>
        </div>
        <div className='mb-3'>
            <label className='form-label' htmlFor='age' >Age:</label>
            <input className='form-control' id='age' type='text' value={sheetData.Age}
            onChange={(e)=>setSheetData({...sheetData, Age:e.target.value})}/>
        </div>
        <div className='mb-3'>
            <label className='form-label' htmlFor='coursr' >Course:</label>
            <input className='form-control' id='course' type='text'value={sheetData.Course}
            onChange={(e)=>setSheetData({...sheetData, Course:e.target.value})}/>
        </div>
        <div className='mb-3'>
            <label className='form-label' htmlFor='collage' >Collage:</label>
            <input className='form-control' id='collage' type='text' value={sheetData.Collage}
            onChange={(e)=>setSheetData({...sheetData, Collage:e.target.value})}
            />
        </div>
        <div className='mb-3'>
            <label className='form-label' htmlFor='phone' >Phone:</label>
            <input className='form-control' id='phone' type='number'value={sheetData.Phone}
            onChange={(e)=>setSheetData({...sheetData, Phone:e.target.value})}/>
        </div>
        <div>
            <button type='submit' className='btn btn-primary' >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Google
