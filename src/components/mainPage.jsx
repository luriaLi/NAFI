import { Link } from "react-router-dom";

const MainPage = () => {
    return (
    <section>
        <div className="main__wrapper">
            <nav>
            <div className="nav__container">
                <div className="main__logo">
                    <a href="#">
                        <img src="../public/imgs/mainLogo.svg" alt="logo" />
                    </a>
                </div>
                <a href="#">
                    <span className="main__prices">Тарифы</span>
                </a>
                <a href="">
                    <span className="main__download">Скачать Илиметр</span>
                </a>
                <div className="main__buttons">
                    <button type="button" className="main__businessAuth">Для бизнеса</button>
                    <Link to= '/auth'>
                    <button type="button" className="main__authbtn">Войти</button>
                    </Link>

                </div>
                <div className="main__lang">EN</div>
            </div>
            </nav>
            <main>
                <div className="mainPage__container">
                    <div className="sideInteractive">
                        <h1 className="main__title"><span className="main__title-firstWord">Войдите</span>, для <br />
                        доступа к личному<br /> кабинету</h1>
                        <p className="main__subtitle">Единая экосистема, которая заменит привычные сервисы</p>
                        <div className="main__btnsContainer">
                            <div className="main__meetingBtns">
                                <button type="button" disabled="disabled" className="main__planMeetingBtn">
                                    <div className="planMeetContainer">
                                    <span className="main__plan">Запланировать
                                    видеовстречу</span>
                                    <img src="../public/imgs/planMeetClock.svg" alt="" />
                                    </div>
                                    <div className="plan__imgsContainer">
                                        <img src="../public/imgs/planMeetEye.svg" alt="" className="planEye" />
                                        <img src="../public/imgs/planCalendar.png" alt="" className="calendarImg" />
                                        <div className="calendarBlur"></div>
                                        
                                    </div>
                                    <span className="main__planInfo">
                                    Запланируйте видеоконференцию заранее, чтобы все сотрудники могли добавить себе упоминание в календарь
                                    </span>
                                </button>
                                <button type="button" disabled="disabled" className="main__InteractiveMeetingBtn">
                                    <span className="main__interactiveMeet">
                                    Интерактивное
                                    мероприятие
                                    </span>
                                    <div className="lines__interactive">
                                        <img src="../public/imgs/interactiveFirst.svg" alt="icon" />
                                        <img src="../public/imgs/interactiveSecond.svg" alt="icon" className="interactive2"/>
                                        <img src="../public/imgs/interactiveThird.svg" alt="icon" className="interactive3" />
                                    </div>
                                    <span className="main__surveys">
                                    Создавайте и проводите опросы аудитории, викторины, голосования 
                                    </span>
                                </button>
                            </div>
                        <div className="main__fastConnection">
                            <div className="fast_container">
                                <button className="go" type="button">Перейти</button>
                                <button type="button" className="goIcon">&#8599;</button>
                            </div>
                            <img src="../public/imgs/mainCamera.svg" alt="" />
                            <span className="fast__title">Быстрое подключение</span>
                        </div>
                        </div>
                    </div>
                    <div className="main__live-container">
                            <button type="button" className="come__live">
                                <span className="main__createLive">Создать <br /> видеовстречу</span>
                                <div className="liveInfo__container">
                                    <div className="main__liveInfo">
                                        <div className="liveInnerCircle"></div>
                                        <span className="main__liveNumOfPpl">до 100 учасников</span>
                                    </div>
                                <img src="../public/imgs/liveArrow.svg"  className="liveArrow" alt="icon" />
                                </div>

                            </button>
                        </div>
                </div>
            </main>
        </div>
    </section>

    )
}

export default MainPage