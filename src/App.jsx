import React from 'react'
import {convert_image} from './Convert'
import Preview_img from './assets/preview.webp'
const App = () => {
    return (
        <>
            <header>
                <h1>Convert any type of image to webp format 😀</h1>
            </header>
            <div className="container">
                <div className="upload__container">
                    <input accept="image/*" type="file" name="uimage" id="uploaded__image" onChange={(event) => convert_image(event)}/>
                        <div className="mask">
                            <h2>Upload Image Here!</h2>
                        </div>
                </div>
                <div className="images">
                    <div className="original__image__container">
                        <img src={Preview_img} alt="Original image not loaded!" id="uimage"/>
                            <h3>Original Image</h3>
                    </div>
                    <div className="converted__image__container">
                        <img src={Preview_img} alt="Converted image not loaded!" id="wimage"/>
                            <h3>Image in webp format</h3>
                    </div>
                </div>
                <div className="download__btn__container">
                    <a href="" download id="download_btn">Download</a>
                </div>
            </div>
        </>
    )
}


export default App;