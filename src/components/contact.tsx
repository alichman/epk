import '../App.css'
import './contact.css'
import {ReactComponent as Gmail} from '../assets/icons/gmail-icon.svg'
import {ReactComponent as Insta} from '../assets/icons/insta-icon.svg'
import {ReactComponent as Scloud} from '../assets/icons/soundcloud-icon.svg'


const email = 'andrewlichmanov@gmail.com';
const onEmailClick = () => navigator.clipboard.writeText(email);

export default function () {

    return <div className='floatingContact'>
        <h2>Contact me:</h2>
        <a href={`mailto:${email}`} target="_blank" onClick={onEmailClick}><Gmail className='icon'/></a>
        <a href='https://www.instagram.com/its.wysband/' target='_blank'><Insta className='icon'/></a>
        <a href='https://soundcloud.com/whateveryousayband' target='_blank'><Scloud className='icon'/></a>
    </div>
}