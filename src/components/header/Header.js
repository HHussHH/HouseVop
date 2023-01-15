import "./header.scss"
import logo from "../../img/logo.svg"

const navData = [
  {
    link: "",
    title: "Главная"
  },
  {
    link: "",
    title: "Сеансы"
  },
  {
    link: "",
    title: "Отзывы"
  },
  {
    link: "",
    title: "Контакты"
  },
  {
    link: "",
    title: "Новости"
  },
  {
    link: "",
    title: "Обо мне"
  },
  {
    link: "",
    title: "Блог"
  },
]

const createNavData = () => {
  const item = navData.map((item, id) => {
    console.log("test")
    return (
      <li className="header__list__item" key={id}>
        <a className="header__list__item-link" href={item.link}>{item.title}</a>
      </li>
    )
  })

  return (
    <ul className="header__list__items">
      {item}
    </ul>
  )
}
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="header__list">
            {createNavData()}
          </nav>
          <div className="header__btn">
            <button>Записаться на сеанс</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header