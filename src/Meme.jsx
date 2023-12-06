import React, { memo, useEffect, useState } from "react";

export const Meme = ()=>{
    const [formData,setFormData] = useState(
        {
            topText:"",
            bottomText:"",
            randomImage:"http://i.imgflip.com/1bij.jpg"
        }
    );
    const [meme,setMeme] = useState();
    useEffect(()=>{
        console.log("Effect");
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setMeme(data))
    },[])
    console.log(meme);
    function handleClick(){
        console.log(1);
        const memeArray = meme.data.memes;
        const randomNo = Math.floor(Math.random() * memeArray.length);
        const randomUrl = memeArray[randomNo].url;
        console.log(randomUrl);
        setFormData((prevData)=>{
            return{
                ...prevData,
                randomImage : randomUrl
            }
        })
    }
    function handleChange(event){
        const {name,value} = event.target;
        setFormData((prevData)=>{
            return {
                ...prevData,
                [name] : value
            }
        })
    }
    return(
        <main>
            <div className="form">
                <input 
                    className="form-input" 
                    placeholder="Top-Text" 
                    type="text" 
                    name="topText" 
                    value={formData.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form-input" 
                    placeholder="Bottom-Text" 
                    type="text" 
                    name="bottomText"
                    value={formData.bottomText}
                    onChange={handleChange} 
                />
                <button className="btn" onClick={handleClick}>Get a new meme image 🤣</button>
            </div>
            <div className="meme">
                <img src={formData.randomImage} className="meme--image" />
                <h2 className="meme--text top">{formData.topText}</h2>
                <h2 className="meme--text bottom">{formData.bottomText}</h2>
            </div>
        </main>
    )
}

