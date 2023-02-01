import React from 'react';
import axios from 'axios';

function GoogleGet() {

const [sheetData, setSheetData] = React.useState([]);

  const getSheetData = () => {
    axios.get('https://sheet.best/api/sheets/3b6cb36d-1ff0-4951-925a-12873cf3fe0c')
      .then(res => {
        setSheetData(res.data);
      })
  }

  React.useEffect(getSheetData, []);

  return (
    <div style={{ padding: '20px', overflow: 'auto', position: 'absolute',right: '0',display: 'inline-block', height:'500px', width:'550px'}}>

            <table className='table w-50 float-left'>
                <thead className='bg-primary text-light'>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Collage</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody className='bg-light border-0'>
                    {sheetData.map((record, i) =>
                        <tr key={i} style={{ height: '10px' }}>
                            <td>{record.Name}</td>
                            <td>{record.Age}</td>
                            <td>{record.Course}</td>
                            <td>{record.Collage}</td>
                            <th>{record.Phone}</th>
                        </tr>)}
                </tbody>
            </table>
        </div>
  )
}

export default GoogleGet
