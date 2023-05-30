
type searchdtls={
    searchkey:string,
    setsearchkey:(searchkey:string)=>void,
    apps:string[],
    resources:string[]
}

const  Search=({searchkey,setsearchkey,apps,resources}:searchdtls)=> {

// const [searchkey,setsearchkey]= useState('')


const handlechange=(e: React.ChangeEvent<HTMLSelectElement>)=>{
    console.log(e.target.value)
    setsearchkey(e.target.value)
}



return (
  <div className="search"> 
    <label>Select Application:</label>  
    <select name="apps" id="apps" onChange={(e)=>handlechange(e)} >
        {
            apps.map((app)=>{
                return (
                    <option value={app}>{app}</option>
                )
            })
        }                    
    </select>
    <label>Select Resource:</label>  
    <select name="resources" id="resources" onChange={(e)=>handlechange(e)} >
        {
            resources.map((resource)=>{
                return (
                    <option value={resource}>{resource}</option>
                )
            })
        }                    
    </select>
    
  </div>
  )
}

export default Search