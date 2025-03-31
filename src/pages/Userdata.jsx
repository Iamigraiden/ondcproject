import React, { useEffect, useState } from 'react'
import './css/home.css'
import axios from 'axios';

function Userdata() {
    // const res = useFetch('https://newondc-d0360-default-rtdb.firebaseio.com/UserData.json', {});
    const [data, setData]=useState([])
    useEffect(()=> {
        axios.get('https://newondc-d0360-default-rtdb.firebaseio.com/UserData.json/')
        // .then(res => console.log(res))
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[])
    
  return (
    <div className='userdata container'>
   <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th >Name</th>
            <th >Email</th>
            <th >Mobile</th>
            <th >Store Name</th>
          </tr>
        </thead>
        <tbody>
            
        {
            data.map(user => {
                return <tr>
                    <td>{user.Name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile}</td>
                    <td>{user.storename}</td>
                </tr>
            })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Userdata
