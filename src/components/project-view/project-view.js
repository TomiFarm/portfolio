import './project-view.css';
import { useState, useEffect } from 'react';
import pokedexImg from '../../assets/pokedex.PNG';
import meetImg from '../../assets/meet.PNG';
import myFlixImg from '../../assets/myFlix.PNG';
import myFlixAngularImg from '../../assets/myFlix-angular.PNG';


export const ProjectView = () => {

    const [showProjectDetails, setShowProjectDetails] = useState(false);
    const [projectToShow, setProjectToShow] = useState({});

    // Array of data about projects
    const projects = [
        {
            name: "PokeDex",
            shortDescription: "App to see details of Pokemons",
            description: "This simple app loads pokemon data from an external API and enables a user to view some details. The app can be viewed in Github pages",
            imgPath: pokedexImg,
            githubLink: "https://github.com/TomiFarm/pokedex-app/",
            appLink: "https://tomifarm.github.io/pokedex-app/"

        },
        {
            name: "Server side API - myFlix",
            shortDescription: "Server side API for myFlix and myFlix - Angular -projects.",
            description: "This project was to build a server side API for the myFlix application. The API's purpose is to provide movie and user data for the myFlix application.",
            imgPath: "",
            githubLink: "https://github.com/TomiFarm/Movie-API",
            appLink: ""
        },
        {
            name: "myFlix",
            shortDescription: "App for finding details of movies",
            description: "This is a client side of the myFlix app. The app provides data about movies. The users are able to create accounts to use the app.",
            imgPath: myFlixImg,
            githubLink: "https://github.com/TomiFarm/myFlix-client",
            appLink: "https://myflix-123.netlify.app/"
        },
        {
            name: "myFlix - Angular",
            shortDescription: "App for finding details of movies",
            description: "This is a client side of the myFlix app. The app provides data about movies. The users are able to create accounts to use the app.",
            imgPath: myFlixAngularImg,
            githubLink: "https://github.com/TomiFarm/myFlix-Angular-Client",
            appLink: "https://tomifarm.github.io/myFlix-Angular-Client/welcome"
        },
        {
            name: "Meet App",
            shortDescription: "App for finding events in cities",
            description: "This is a PWA created test driven development technique using React. The app loads event data using Google Calendar API and AWS lambda Serverless functions as authorization server.",
            imgPath: meetImg,
            githubLink: "https://github.com/TomiFarm/meet_app",
            appLink: "https://tomifarm.github.io/meet_app/"
        },
        {
            name: "Hello-World",
            shortDescription: "Chat app for mobile devices",
            description: "This is a single room mobile chat app built using React Native. The app functionalities includes sharing pictures and location.",
            imgPath: "",
            githubLink: "https://github.com/TomiFarm/hello-world",
            appLink: ""
        }
    ];


    
    // function to open project details
    const openProjectDetails = (project) => {
        setShowProjectDetails(true);
        setProjectToShow(project);
    }

    // function to close project details
    const closeProjectDetails = () => {
        setShowProjectDetails(false);
        setProjectToShow({});
    }

    // function to open new tab
    const handleClick = (projectLink, event) => {
        event.stopPropagation();
        window.open(projectLink);
    }

    // function to handle clicking outside of modal
    const handeClickOutsideOfModal = (event) => {
        if (event.target.className === 'modal-background'){
            closeProjectDetails();
        }
    }


    useEffect(() => {
        if(showProjectDetails === true){
            document.getElementById('modal-to-select').classList.remove('hide-project-modal');
            // document.getElementById('background').classList.add('darken-background');
        } else if (showProjectDetails === false) {
            document.getElementById('modal-to-select').classList.add('hide-project-modal');
            // document.getElementById('background').classList.remove('darken-background');
        }
    }, [showProjectDetails]);

    return (
        <div id='background'>
            <div className='project-view-container'>
                {/* map through projects array to create a card of each project */}
                {projects.map(project => {
                    return(
                        <div className='project-box' onClick={() => openProjectDetails(project)} key={project.name}>
                            <h4>{project.name}</h4>
                            {project.imgPath.length > 0 && <img className='project-image' src={project.imgPath} alt={project.name} />}
                            <p className='project-box-text'>{project.shortDescription}</p>
                            <div className='project-box-links'>
                                {project.appLink.length > 0 && <div className='project-box-links-button' onClick={(event) => handleClick(project.appLink, event)}>See {project.name} in action</div>}
                                {project.githubLink.length > 0 && <div className='project-box-links-button' onClick={(event) => handleClick(project.githubLink, event)}>Github repository</div>}                               
                            </div>
                        </div>
                    )
                })}

            
                <div id='modal-to-select' className='modal-background' onClick={(event) => handeClickOutsideOfModal(event)}>
                    <div className='project-modal'>
                        <div className='modal-container'>
                            <h4>{projectToShow.name}</h4>
                            <p>{projectToShow.description}</p>
                            {projectToShow.imgPath && <img className="project-image" src={projectToShow.imgPath} alt={projectToShow.name}/>}                          
                            <button onClick={closeProjectDetails}>CLOSE</button>
                        </div>
                    </div>
                </div>


                {/* <div id='modal-to-select' className='project-modal'>
                    <div className='modal-container'>
                        <h4>{projectToShow.name}</h4>
                        <p>{projectToShow.description}</p>
                        <img className="project-image" src={projectToShow.imgPath} alt={projectToShow.name}/>                          
                        <button onClick={() => setShowProjectDetails(false)}>hide</button>
                    </div>
                </div> */}
            </div>
        </div>
    );
};