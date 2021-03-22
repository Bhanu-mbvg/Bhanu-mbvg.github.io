import React from 'react';
import { CardDeck } from 'react-bootstrap';
import GhCard from './GhCard';

const ProjectList = () => {
  return(
    <div className="container py-1">
      <CardDeck className="row">
        <div className="col-lg-4 d-flex align-items-stretch col py-3">  
          <GhCard 
            reponame = "Pathfinder" 
            repourl = "https://github.com/Bhanu-mbvg/pathfinder" 
            repolang = "JavaScript"
            repolangcolor = "#f1e05a"
            repodesc = "Pathfinding Visualiser showing algorithms like A*, BFS, DFS and Dijkstra between 2 nodes in an interactive canvas."/>
        </div>
        <div className="col-lg-4 d-flex align-items-stretch col py-3">  
          <GhCard 
            reponame = "Smart-Cursor" 
            repourl = "https://github.com/Bhanu-mbvg/Smart-Cursor" 
            repolang = "Python"
            repolangcolor = "#3872a5"
            repodesc = "Python Script to move the mouse using your hand. It uses opencv and pyautogui libraries."/>
        </div>
        <div className="col-lg-4 d-flex align-items-stretch col py-3">    
          <GhCard 
            reponame = "Notes-to-Notes" 
            repourl = "https://github.com/Bhanu-mbvg/Notes-to-Notes" 
            repolang = "Python"
            repolangcolor = "#3872a5"
            repodesc = "Smart Web App made in Flask to digitalize handwritten notes."/>
        </div>
        <div className="col-lg-4 d-flex align-items-stretch col py-3">    
          <GhCard 
            reponame = "AirbnbNLP" 
            repourl = "https://github.com/Bhanu-mbvg/AirbnbNLP" 
            repolang = "Jupyter Notebook"
            repolangcolor = "#da5b26"
            repodesc = "Classification of reviews of Airbnb by the process of NLP."/>
        </div>
        <div className="col-lg-4 d-flex align-items-stretch col py-3">    
          <GhCard 
            reponame = "LauncherExtension" 
            repourl = "https://github.com/Bhanu-mbvg/LauncherExtension" 
            repolang = "Javascript"
            repolangcolor = "#f1e05a"
            repodesc = "A chrome and firefox extension for ease of access for social links."/>
        </div> 
      </CardDeck>
    </div>
  );
}

export default ProjectList;