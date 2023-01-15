import React from 'react';
import "./Projects.css";

const Projects = () => {
  return (
    <div className='project' id="projects" style={{height: 500}}>
        <h1>Projects</h1>
          <a target="_blank" href='https://netflix-clone-a99e7.web.app/'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/1/10/Meta-image-netflix-symbol-black.png'/>
            Netflix Clone
          </a>
          <a target="_blank" href='https://clone-63f62.web.app/'>
            <img src="https://cdn.iconscout.com/icon/free/png-256/amazon-68-722671.png"/>
            Amazon Clone
          </a>
          <a target="_blank" href='https://clone-966a7.web.app/'>
            <img src='https://freesvg.org/img/1534129544.png' />
            Google Clone
          </a>
          <a>
            <img />
          </a>
          <a>
            <img />
          </a>

        </div>
  )
}

export default Projects
