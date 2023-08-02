import React from "react"
import Styled from "./Section.module.css"
import Button from "../../component/Button/Button"
import {AiOutlineInfoCircle} from 'react-icons/ai';
// import {BsSearch} from "react-icons/bs"
import SearchBar from "../../component/SearchBar/SearchBar";
const Section =()=>{

    return(
        <div className={Styled.container}>

           <div className={Styled.left}> 
             <div className={Styled.pass}>
                <p>IN / OUT Gate Pass</p>
                </div>

           <div className={Styled.searchbox}>
          
            {/* <input type="text"
            placeholder="Search"  />
            <BsSearch style={{marginRight:"10rem", fontSize:"2rem"}}/> */}
           <SearchBar/>
           </div>

           <div>
            <Button name="New Gate Pass"/>
           </div>
           </div>

           <div className={Styled.right}>

    <div  className={Styled.div1}>
        <div className={Styled.info}><h4>Stock <AiOutlineInfoCircle/></h4> </div>
        <div className={Styled.currency}>100,000</div>
    </div>

   
    <div  className={Styled.div1}>
        <div className={Styled.info}><h4>Stock <AiOutlineInfoCircle/></h4> </div>
        <div className={Styled.currency}>100,000</div>
    </div>

    
    <div  className={Styled.div1}>
        <div className={Styled.info}><h4>Stock <AiOutlineInfoCircle/></h4> </div>
        <div className={Styled.currency}>100,000</div>
    </div>
  
    <div  className={Styled.div1}>
        <div className={Styled.info}><h4>Stock <AiOutlineInfoCircle/></h4> </div>
        <div className={Styled.currency}>100,000</div>
    </div>
   
           </div>

        </div>
    )
}
export default Section