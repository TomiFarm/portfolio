import './main-view.css';
import profileImage from '../../assets/profile-image.jpg';
import linkedinLogo from '../../assets/LI-In-Bug.png';
import githubLogo from '../../assets/github-mark.png';
import cv from '../../assets/cv.pdf';

const introductionText = 'Hello and welcome to my portfolio website! I am an aspiring web developer and on this website you can find out who am I and what projects I have been working on.'

const downloadCV = () => {
    window.open(cv, '_blank');
}

const directTo = (target) => {
    let goto = document.location.href + target;
    document.location.href = goto;
}

const openNewTab = (target) => {
    window.open(target, '_blank');
}

const handleClick = (event) => {
    
    if (event.target.className.includes('cv')) {
        downloadCV();
    } else if (event.target.className.includes('projects')) {
        directTo('projects');
    } else if (event.target.className.includes('contact')) {
        directTo('contact');
    } else if (event.target.className.includes('linkedin')){
        openNewTab('https://www.linkedin.com/in/tomifaerm/');
    } else if (event.target.className.includes('github')){
        openNewTab('https://github.com/TomiFarm');
    }
}

export const MainView = () => {
    return(
        <div className="main-view-container">
            <div className='content-box'>
                <img id="profile-image" src={profileImage} alt="Profile" />
                <div className='text-container'>
                    <p>{introductionText}</p>
                    <div onClick={(event) => handleClick(event)}>
                        <span className='cv clickable'>Check out my CV</span>
                    </div>
                    <div onClick={(event) => handleClick(event)}>
                        <span className='projects clickable'>See my latest projects</span>
                    </div>
                    <div onClick={(event) => handleClick(event)}>
                        <span id='contact' className='contact clickable'>Contact me</span>
                        <img src={linkedinLogo} alt='linkedIn icon' className='linkedin social-icon clickable' />
                        <img src={githubLogo} alt='GitHub icon' className='github social-icon clickable' />
                    </div>
                </div>
            </div>
        </div>
    );
};