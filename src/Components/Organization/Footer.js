import { Link } from "react-router-dom";
import "../../Css/FooterCss.css"

export default function Footer() {
  return (
<footer className="footer">
    <div className="footer-links">
        <div className="footer-category">
            <h4>Social</h4>
            <ul>
                <li>
                    <Link to="https://www.linkedin.com/in/dennys-antunish/" target="_blank" className="footer-link">
                        <span className="footer-icon">🎶</span> LinkedIn
                    </Link>
                </li>
                <li>
                    <Link to="https://sites.google.com/view/antunish/projects" target="_blank" className="footer-link">
                        <span className="footer-icon">🎤</span> Portfolio
                    </Link>
                </li>
            </ul>
        </div>
        <div className="footer-category">
            <h4>GitHub</h4>
            <ul>
                <li>
                    <Link to="https://github.com/antunishdPursuit/events_attending" target="_blank" className="footer-link">
                        <span className="footer-icon">🎸</span>Front End
                    </Link>
                </li>
                <li>
                    <Link to="https://github.com/antunishdPursuit/EventsBackEnd" target="_blank" className="footer-link">
                        <span className="footer-icon">🥁</span>Back End
                    </Link>
                </li>
            </ul>
        </div>
    </div>
</footer>

  );
}
