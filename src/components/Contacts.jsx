import { FaPhone } from "react-icons/fa";
import { BsMeta } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import '../styles/Contacts.css';

const Contacts = () => {
    return (
        <div id="contacts" className="d-flex justify-content-around align-items-center w-100 flex-wrap">
            <h2 className="w-100 text-center">Norite su mumis susisiekti?</h2>
            <div id="contact-container" className="d-flex justify-content-around flex-column">
                <div className="contact">
                    <a href="tel:+37068787037">
                        <FaPhone size={30} />
                        <h4 className="d-inline">+37068787037</h4>
                    </a>
                </div>
                <div className="contact">
                    <a href="https://www.facebook.com/FlowStateZirgynas">
                        <BsMeta size={30} />
                        <h4 className="d-inline">@FlowStateZirgynas</h4>
                    </a>
                </div>
                <div className="contact">
                    <a href="https://www.instagram.com/flow_state_zirgynas/">
                        <FaInstagram size={30} />
                        <h4 className="d-inline">@flow_state_zirgynas</h4>
                    </a>
                </div>
            </div>
            <hr className="hr-primary" />
            <iframe id="map" title="flow state map" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2934.9856910619264!2d25.57496904545954!3d54.588741326509584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2slt!4v1626791877199!5m2!1sen!2slt"
                allowFullScreen="" loading="lazy">
            </iframe>
        </div>
    )
}

export default Contacts;