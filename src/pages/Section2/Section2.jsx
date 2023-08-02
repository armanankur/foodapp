import React  from "react";
import Styled from "../Section2/Section2.module.css"
import {MdOutlineEdit} from 'react-icons/md';
import {CiPause1} from 'react-icons/ci';
import {BsPlay} from 'react-icons/bs';
import {BsDownload}from 'react-icons/bs';
import {BsLink45Deg}from 'react-icons/bs';
import {AiFillStar} from 'react-icons/ai'
import {BiSolidStarHalf} from 'react-icons/bi'
import {AiOutlineStar} from 'react-icons/ai'
import Input from "../../component/InputField/Input";
const Section2=()=>{

    return(
        <div className={Styled.container}>
         
         <div className={Styled.header}>
            
          <div className={Styled.left}>

            <div className={Styled.one}></div>
            <div className={Styled.two}>Slip Number #1234</div>
            <div className={Styled.three}>Loading</div>
            <div className={Styled.three}>Loading </div>

          </div>

          <div className={Styled.mid}>
          <div className={Styled.one}> <MdOutlineEdit/></div>
          <div className={Styled.one}><CiPause1/></div>
          <div className={Styled.one}><BsPlay/></div>
          <div className={Styled.one}><BsDownload/></div>
          <div className={Styled.one}><BsLink45Deg/></div>

          </div>


        <div className={Styled.right}></div>

        <div > <AiFillStar style={{fontSize:"2.5rem" , color: "#FFA000"}}/></div>
        <div > <AiFillStar style={{fontSize:"2.5rem" , color: "#FFA000"}}/></div>
        <div > <AiFillStar style={{fontSize:"2.5rem" , color: "#FFA000"}}/></div>
        <div><BiSolidStarHalf style={{fontSize:"2.5rem" , color: "#FFA000"}}/> </div>
        <div><AiOutlineStar style={{fontSize:"2.5rem" , color: "#FFA000"}}/></div>
         </div>


         <div className={Styled.main}>
        
        <div className={Styled.upper}>
     <Input name="Truck Number"/>
     <Input name="Field"/>
     <Input  name="Field"/>
     <Input name="Field"/>
     <Input name="Field"/>
     <Input name="Field"/>
        </div>

        <div className={Styled.lower}>
        <Input  name="Field"/>
     <Input name="Field"/>
     <Input name="Field"/>
     <Input name="Field"/>
     <Input name="Field"/>
     <Input name="Field"/>

</div>



         </div>
         
        </div>
    )
}
export default Section2