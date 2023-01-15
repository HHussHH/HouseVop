
import "./intro.scss";
import bg from "../../img/bg.png"
const Intro = () => {
    return (
        <div className="intro" >
            <div className="container">
                <div className="intro__inner">

                    <img src={bg} />
                    <h3 className="intro__suptitle">Укрепление здоровья</h3>
                    <h1 className="intro__title">Акватерапия<br />RitmStyle</h1>
                </div>
            </div>
        </div >
    )
}

export default Intro