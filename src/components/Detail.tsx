import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import  { useState } from 'react'

type detaisl ={
    ConsumedQuantity:number,
    Cost:number,
    Date:string,
    Location:string,
    MeterCategory:string,
    ResourceGroup:string,
    ServiceName:string
}

const Detail = ({ConsumedQuantity,Cost,Date,Location,MeterCategory,ResourceGroup ,ServiceName}:detaisl) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
      <article className='tile'>
        <header>
          {/* <h2>Application</h2> */}
          <span className='appname'>{MeterCategory}</span>
          <span className='appname'>{ResourceGroup}</span>
          <p>Date : {Date}</p>
          <button className='btn' onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {showInfo && 
        < div className='display'>
        <p><span className='bold'>Cost</span> :  <span>&#36;</span>{Cost}</p>
        {/* <p><span className='resource'>Resource Group</span> : {ResourceGroup}</p> */}
        <p><span className='bold'>Location</span> : {Location}</p>

        </div>}
      </article>
    );
}

export default Detail