import React, { useEffect, useState } from 'react'
import './aboutMe.css';

export default () => {

    const [reposList, setReposList] = useState(null)

    useEffect (() => {
        const loadAll = async () => {

        }
        loadAll();
    }, []);

    return(
        <div className='aboutMe'>
            HELLO WORLD
        </div>
    )
}
