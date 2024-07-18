import '../styles/Services.css';
import { GiSaddle } from "react-icons/gi";
import { GiStable } from "react-icons/gi";
import { GiPartyPopper } from "react-icons/gi";

const Services = () => {
    return (
        <div id="services" className="d-flex flex-column justify-content-center align-items-center">
            <h2>Paslaugos</h2>
            <div id="services-container" className="d-flex flex-row justify-content-center align-items-center">
                <div className="service d-flex flex-column justify-content-center align-items-center">
                    <GiSaddle size={100} />
                    <h3>Jojimo pamokos</h3>
                    <h5>Vienkartinės ir daugkartinės jojimo pamokos, galimi abonementai.</h5>
                </div>

                <div className="service d-flex flex-column justify-content-center align-items-center">
                    <GiStable size={100} />
                    <h3>Gardų nuoma</h3>
                    <h5>Vidiniai ir laukiniai gardai, maitinimas ir gardo valymas įskaičiuotas.</h5>
                </div>

                <div className="service d-flex flex-column justify-content-center align-items-center">
                    <GiPartyPopper size={100} />
                    <h3>Vieta renginiams</h3>
                    <h5>Vieta fotosesijoms, vaikų gimtadieniams, ir įvairiems renginiams.</h5>
                </div>
            </div>
        </div>
    )
}

export default Services;