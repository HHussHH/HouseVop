import "./sessions.scss"
import cardImg from "../../img/sessionImg.png"
import BigcardImg from "../../img/bigImg.png"

const sessionCardData = [
    {
        img: cardImg,
        title: "RitmStyle для пар",
    },
    {
        img: cardImg,
        title: "RitmStyle с полным погружением под воду"
    },
    {
        img: cardImg,
        title: "RitmStyle для беременных"
    },
    {
        img: cardImg,
        title: "RitmStyle + красочная подводная фотосессия"
    },
]


const sessionCreateCard = () => {
    const card = sessionCardData.map((item, id) => {
        return (
            <div className="session__Card" key={id}>
                <img src={item.img} alt={item.title} />
                <h3 className="session__card__title">{item.title}</h3>
            </div>
        )
    })
    return (
        <div className="session__first__two">
            {card}
        </div>
    )
}
const Sessions = () => {


    return (
        <div className="session">
            <div className="container">
                <h1 className="session__title">Сеансы RitmStyle</h1>
                <div className="session__Cards">

                    <div className="session__first__first">
                        <img src={BigcardImg} alt="" className="session__BigCard" />
                        <h3 className="session__Bigcard__title">Стандартный RitmStyle</h3>
                    </div>

                    <div className="session__first__two">
                        {sessionCreateCard()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sessions