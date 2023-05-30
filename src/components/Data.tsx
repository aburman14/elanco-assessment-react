import  { useEffect,useState } from 'react'
import axios from "axios";
import Detail from './Detail';

interface props{
    searchkey:string
}
const Data = ({searchkey}:props) => {
    console.log(searchkey)
    const [data,setdata]=useState([])
    // let val='Gloves'
    const getApps= async () => {
        try{
        let res = await axios.get(`https://engineering-task.elancoapps.com/api/applications/${searchkey}`);
        let  data1 = res.data;
        const newarr= data1.slice(0, 9)
        setdata(newarr)
        }
        catch{
            console.log('this does not exist')
        }
      }

      const getResources= async () => {
        try{
        let res = await axios.get(`https://engineering-task.elancoapps.com/api/resources/${searchkey}`);
        let  data1 = res.data;
        const newarr= data1.slice(0, 9)
        setdata(newarr)
        }
        catch{
            console.log('this does not exist')
        }
      }

      type props ={
        ConsumedQuantity:number,
        Cost:number,
        Date:string,
        Location:string,
        MeterCategory:string,
        ResourceGroup:string,
        ServiceName:string
    }

useEffect(() => {
    getApps()
    getResources()
}, [searchkey])

  return (
    <main>
      <div className='container'>
        <h2 className='name'>Application Name List</h2>
        <section className='info'>
            <article className='header-tile'>
                <p>Resource Name</p>
                <p>Application Name</p>
                <p>Date</p>
                <p>Expand/Collapse</p>

            </article>

          {data.map((elem:props) => {
            return (
              <Detail  {...elem}/>
            );
          })}

        </section>
      </div>
    </main>
  )
}

export default Data