import { Link } from "react-router-dom"

const Auth = () => {

    return (
        <div className="auth__wrapper">
            <div className="auth__container">
                <nav className="auth__nav">
                    <img src="../public/imgs/logo.svg" alt="logo" className="auth__logo" />
                    <div className="auth__lang">EN</div>
                </nav>
                <main className="auth__main">
                    <div className="authBox__container">
                        <span className="auth__logIn">Вход</span>
                        <form method="post" className="auth__form">
                            <input type="email" name="email" id="email" className="email" placeholder="Введите свою почту"/>
                            <input type="password" name="password" id="password" className="password" placeholder="Введите свой пароль"/>
                            <Link to = '/auth/account'>
                            <button type="submit" className="logIn_btn">Войти</button>
                            </Link>
                            <button type="button" className="forgotPassword">Забыли пароль?</button>
                            <span className="socials">Или войти с помощью</span>
                            <div className="socials__logIn">
                                <button type="button" className="yandexBtn">
                                <img src="../public/imgs/yandexLogo.svg" alt="icon" />
                                </button>
                                <button type="button" className="googleBtn">
                                <img src="../public/imgs/googleLogo.svg" alt="icon" />

                                </button>
                                <button type="button" className="VKbtn"> 
                                <img src="../public/imgs/VKLogo.svg" alt="icon" />

                                </button>
                            </div>
                        </form>
                        <div className="signUp">
                            <span className="noacc">Нет аккаунта?</span>
                            <Link to = '/auth/signUp'>
                            <button type="button" className="signUp">Зарегестрироваться</button>
                            </Link>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Auth