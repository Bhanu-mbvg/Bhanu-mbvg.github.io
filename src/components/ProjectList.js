import React from 'react';
import { CardDeck } from 'react-bootstrap';
import GhCard from './GhCard';

const ProjectList = () => {
  return(
    <div className="container py-1">
      <CardDeck className="row">
        <div className="col-lg-4 d-flex align-items-stretch col py-3">  
          <GhCard 
            reponame = "CharNet-Handwritten" 
            repourl = "https://github.com/Bhanu-mbvg/CharNet-Handwritten" 
            repolang = "Jupyter Notebook"
            repolangcolor = "#da5b26"
            repodesc = "Character Convolution Network to recognise the digits(0-9) and characters(A-Z and a-z)"/>
        </div>
        <div className="col-lg-4 d-flex align-items-stretch col py-3">  
          <GhCard 
            reponame = "ExploratoryAnalysis-IPL" 
            repourl = "https://github.com/Bhanu-mbvg/ExploratoryAnalysis-IPL" 
            repolang = "Jupyter Notebook"
            repolangcolor = "#da5b26"
            repodesc = "Exploratory Data Analysis and visualisation using the IPL(cricket league) Dataset from 2008 to 2020"/>
        </div>
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
            repodesc = "Automate the movements of mouse using your hand using OpenCV"/>
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