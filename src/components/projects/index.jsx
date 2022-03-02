import React, { useEffect, useState } from 'react'
import './projects.css';
//import api from '../../api'
import ProjectCard from '../projectCard';

export default () => {

    const [reposList, setReposList] = useState(null)

    useEffect (() => {
        const loadAll = async () => {
            // Pegando a lista TOTAL
            /*let list = await api.getListRepos();
            list[0].items.sort(function(a,b){
                return new Date(b.created_at) - new Date(a.created_at);
            })
            setReposList(list[0]);*/
        }
        loadAll();
    }, []);

    return(
        <div className='projects'>
            {reposList && console.log(reposList.items)}
            {/*reposList && reposList.items.map((item,key)=>(
                <ProjectCard key={item.id} data={item}></ProjectCard>
            ))*/}
        </div>
    )
}
