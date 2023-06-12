import React,{useState,useEffect} from 'react'
import axios from 'axios'

function App() {
  const[veri,setVeri]=useState();
  const[tarih,setTarih]=useState();

  useEffect(()=>{
    axios.get('https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json')
    .then(res=>setVeri(res.data[tarih]))
    .catch(err=>console.log(err))

  },[veri,tarih])

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 mx-auto mt-4'>
            <h2 className='text-center text-white display-3'>Türkiye COVID-19 Search Engine</h2>
            <input type='text' placeholder='GG/AA/YY' className='form-control' onChange={x=>setTarih(x.target.value)}/>
            <table className='table text-white'>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Number of tests</th>
                  <th scope="col">Number of patients</th>
                  <th scope="col">Number of Deaths</th>
                </tr>
              </thead>
              <tbody>
                <tr className={veri===undefined ? 'bg-danger' : 'bg-success'}>
                  <th scope="row">{veri===undefined ? 'Waiting for Data' : veri.date}</th>
                  <td>{veri===undefined ? 'Waiting for Data' : veri.totalTests}</td>
                  <td>{veri===undefined ? 'Waiting for Data' : veri.patients}</td>
                  <td>{veri===undefined ? 'Waiting for Data' : veri.deaths}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
export default App