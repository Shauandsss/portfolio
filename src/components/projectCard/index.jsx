import React, {useEffect, useState} from 'react';
import './projectCard.css';
import api from '../../api'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { LineWeight } from 'material-ui-icons';

export default (item) => {

    const [scrollX, setScrollX] = useState(0);    
    const [readme, setReadme] = useState(null);
    const [images, setImages] = useState(null);
    
    useEffect (() => {
        const loadAll = async () => {
            let readmetxt = await api.getReadmeRepo(item.data.name);
            var base64 = require('js-base64').Base64;
            var contents = base64.decode(readmetxt.content);
            setReadme(contents);
            //getImagesFromContent("# Gefion Project made with React, data extraction with Python and MySql. Some financial content, like news: ![image](https://user-images.githubusercontent.com/51674001/114846590-b35d7f80-9d91-11eb-81ae-4987c4812314.png) Content: ![image](https://user-images.githubusercontent.com/51674001/114846683-c5d7b900-9d91-11eb-89dd-9fc4b3e4a6f4.png) And some data extracted with python, using chart Js to show (extracted from Brazilian stock market): ![image](https://user-images.githubusercontent.com/51674001/114846535-a80a5400-9d91-11eb-9ff7-41781652373d.png) Everydate come from the database, nothing is hardcoded, news, author news, data for the indexes.");       
            getImagesFromContent(contents);
        }
        loadAll();
    }, []);

    function getImagesFromContent (text) {
        let images = [];
        let pos = -1;
        let contagem = 0;
        while (true) {
            pos = text.indexOf("![image]", pos + 1); 
            if (pos < 0) break;
                contagem++;
        }
        for(let i=0;i< contagem;i++){
            let startIndex = 0
            let endIndex = 0;
            let textToRemove;
            startIndex = text.indexOf('![image]');
            endIndex = text.indexOf(')', startIndex);
            textToRemove = text.substring(startIndex, endIndex+1);
            images.push(text.substring(startIndex+9, endIndex));
            text = text.replace(textToRemove, '')
        }
        setImages(images);
        setReadme(text);
    }


    const handleLeftArrow = () => {
        let imageTagSize = document.getElementsByClassName('imgOnRoll')[0].clientWidth
        if(scrollX-imageTagSize >= 0)
            setScrollX(scrollX - imageTagSize)
    }

    const handleRightArrow = () => {
        let imageTagSize = document.getElementsByClassName('imgOnRoll')[0].clientWidth
        let containerTagSize = (document.getElementsByClassName('container-pc')[0].clientWidth)
        if((scrollX + imageTagSize) < (containerTagSize * images.length))
            setScrollX(scrollX + imageTagSize)   
    }

    return (
        <div className='container-pc'>
            <div className='title-pc'>
                <a target="_blank" href={item.data.html_url}>
                    {item.data.name}
                </a>
            </div>
            <div className='dataCreated'>
                created at:{new Date(item.data.created_at).toLocaleDateString('en-US')}
            </div>

            <div className='readme'>
                {readme}
                {images && <div className="movieRow">
                
                    
                    {images.length > 1 ? <div className="movieRow--left" onClick={handleLeftArrow}>
                        <NavigateBeforeIcon style={{fontSize:50}}/>
                    </div> : ''}
                    {images.length > 1 ? <div className="movieRow--right" onClick={handleRightArrow}>
                        <NavigateNextIcon style={{fontSize:50}}/>
                    </div> : ''}
                    <div className='movieRow--listarea'>
                        {images && <div className="movieRow--list" style={{
                            marginLeft: -scrollX,
                            width: images.length*(document.getElementsByClassName('container-pc')[0].clientWidth),
                        }}>
                        {images && images.map((item,key)=>(
                            <div key={key} className='movieRow--item'>
                                <img className='imgOnRoll' src={item} ></img>
                            </div>
                        ))}
                        </div>}
                    </div>
                </div>}
            </div>
        </div>
    )
}