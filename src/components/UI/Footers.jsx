import footerDetails from "../../api/footerapi.json";
import { NavLink } from "react-router-dom";

import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";


export const Footers = () => {

    const footerIcons = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    }

    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">{
                footerDetails.map((curData, index) => {
                    const { icon, title, details } = curData;
                    return (
                        <div classname="footer-contact" key={index}>
                            <div className="icon">{footerIcons[icon]}</div>
                            < div className="footer-contact-text">
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                    );
                })
            }</div>

            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-two-cols">
                        <div className="copyright-text">
                            <p>
                                Copyright & copy; 2025, All Right Reserved
                            </p>
                        </div>

                        <div className="footer-menu">
                            <ul>
                                <li>
                                    <NavLink to="/">Home</NavLink>
                                </li>

                                <li>
                                    <NavLink to="" target="_blank">Social</NavLink>
                                </li>

                                <li>
                                    <NavLink to="" target="_blank">Source Code</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact">Contact</NavLink>
                                </li>
                            </ul>

                        </div>

                    </div>

                </div>

            </div>
        </footer>);
};