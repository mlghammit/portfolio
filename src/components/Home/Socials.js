import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'


export function Socials() {

    return (
            <ul>
            <li>
            <a
                href="https://www.linkedin.com/in/hamza-khamissa-95ba63260/"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon
                icon={faLinkedin}
                color="#4d4d4e"
                className="anchor-icon"
                />
            </a>
            {/* </li>
            <li> */}
            <a
                href="https://github.com/mlghammit"
                target="_blank"
                rel="noreferrer"
            >
                <FontAwesomeIcon
                icon={faGithub}
                color="#4d4d4e"
                className="anchor-icon"
                />
            </a>
            {/* </li>
            <li> */}
            <a
                href="https://www.instagram.com/hamza.k.04/"
                rel="noreferrer"
                target="_blank"
            >
                <FontAwesomeIcon
                icon={faInstagram}
                color="#4d4d4e"
                className="anchor-icon"
                />
            </a>
            </li>
            </ul>
    )
}