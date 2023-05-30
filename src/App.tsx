
import './App.css'
import axios from "axios";
import { useEffect ,useState}  from 'react'
import Search from './components/Search';
import Data from "./components/Data"


function App() {

  const [searchkey,setsearchkey]= useState('Gloves')
  const [apps,setapp]=useState <string[]>([])
  const [resources,setresources]=useState<string[]>([])
  
const getApps= async () => {
  let res = await axios.get("https://engineering-task.elancoapps.com/api/applications");
  let  data1 = res.data;
  // console.log(data1)
  setapp(data1)
  
};

const getResources=async()=>{
  let res = await axios.get("https://engineering-task.elancoapps.com/api/resources");
  let  data1 = res.data;
  // console.log(data1)
  setresources(data1)
}


useEffect(() => {
  
  getApps()
  getResources()
 
}, [])



  return (
    <>
      <Search searchkey={searchkey} setsearchkey ={setsearchkey} apps={apps} resources={resources}/>
      <Data searchkey={searchkey}/>
    </>
  )
}

export default App
