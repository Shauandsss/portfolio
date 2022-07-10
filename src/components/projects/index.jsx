import React, { useEffect, useState } from "react";
import "./projects.css";
import api from "../../api";
import ProjectCard from "../projectCard";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [reposList, setReposList] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista TOTAL
      let list = await api.getListRepos();
      console.log(list);
      list[0].items.sort(function (a, b) {
        return new Date(b.created_at) - new Date(a.created_at);
      });
      setReposList(list[0]);
    };
    loadAll();
  }, []);

  return (
    <div className="projects">
      {reposList && console.log(reposList.items)}
      {reposList &&
        reposList.items
          .filter(function (option) {
            return option.id !== 469904284;
          })
          .map((item) => <ProjectCard key={item.id} data={item}></ProjectCard>)}
    </div>
  );
};
