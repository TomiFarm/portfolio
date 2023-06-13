import './contact-view.css';
import linkedinLogo from '../../assets/LI-In-Bug.png';
import githubLogo from '../../assets/github-mark.png';

const contactDetails = {
    email: 'tomifarm@hotmail.com',
    phone: '+4915254706681',
    linkedIn: 'https://www.linkedin.com/in/tomifaerm/',
    github: 'https://github.com/TomiFarm'
}

export const ContactView = () => {
    return (
        <div className='contact-container'>
            <h4>Contact me:</h4>
            <p>Email: {contactDetails.email}</p>
            <p>Phone: {contactDetails.phone}</p>
            <p>Social networks:
                <img src={linkedinLogo} alt='linkedIn icon' className='social-icon clickable' onClick={() => window.open(contactDetails.linkedIn, '_blank')}></img>
                <img src={githubLogo} alt='GitHub icon' className='social-icon clickable' onClick={() => window.open(contactDetails.github, '_blank')}></img>
            </p>
        </div>
    );
};