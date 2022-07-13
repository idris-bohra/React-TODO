
import React from 'react'
import { useState } from 'react'
import Card from './Card';

export default function Compo1() {

    const [arr, setarr] = useState([]);
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

  

    const onchangehandler = (e)=>{
        settitle(e.target.value);
    }

    const onchangehandler2 = (e)=>{
        setdesc(e.target.value);
    }

    const updated = ()=>{
        console.log("updating...")
        console.log("title : " + title);
        console.log("desc : " + desc);
        setarr([...arr , {titles : title , descs: desc}]);
        console.log(arr);
        settitle("");
        setdesc("");

        
    }

    const removed = (a)=>{
        console.log("removing...");
        const finaldata = arr.filter((curEle,index)=>{
            return index!==a
        })

        setarr(finaldata)
    }





    return (

        <>

        <div className='container my-5 form-control'  style={{"border":"2px solid black"}}>
            <div className='container'>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Enter the title</label>
                    <input type="text" onChange={onchangehandler} value={title} class="form-control" id="exampleFormControlInput1"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Enter the description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" onChange={onchangehandler2} value={desc} rows="3"></textarea>
                    <br/>
                    <button type="button" onClick={updated} class="btn btn-primary">Add</button>

                </div>
            </div>

        </div>

        {arr.map((elem , index)=>{

            return(
                <Card key={index} id={index} addtitles = {elem.titles} adddescs = {elem.descs} remove={removed}/>
            )

        })}


    </>
        

        
    )
}
