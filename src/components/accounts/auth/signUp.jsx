import { Link } from "react-router-dom"
const SignUp = () => {
    const searchNames = ["руководитель", "ученик"]
 return (
    <div>
                <div className="auth__wrapper">
            <div className="auth__container">
                <nav className="auth__nav">
                    <img src="../public/imgs/logo.svg" alt="logo" className="auth__logo" />
                    <div className="auth__lang">EN</div>
                </nav>
                <main className="auth__main">
                    <div className="authBox__container">
                        <span className="auth__logIn">Регистрация</span>
                        <form method="post" className="auth__form">
                            <div className="dropDown">
                                <button type="button" className="dropdown__btn">
                                    <span className="dropdownPlaceholder">Выберите сферу деятельности</span>
                                    <img src="../public/imgs/ArrowLineUpdown.svg" alt="Icon" />
                                    </button>
                                <div className="dropDown__inner">

                                </div>
                            </div>
                            <input type="email" name="email" id="email" className="email" placeholder="Введите свою почту"/>
                            <input type="password" name="password" id="password" className="password" placeholder="Введите свой пароль"/>
                            <Link to = '/auth/account'>
                            <button type="submit" className="logIn_btn">Войти</button>
                            </Link>
                            <p className="sighnUp__agreement">
                            При нажатии на кнопку вы соглашаетесь с политикой обработки персональных данных в соответствии с <span className="span__agreement">пользовательским соглашением</span> 
                            </p>
                        </form>
                        <div className="signUp">
                            <span className="noacc">Есть аккаунт?</span>
                            <Link to = '/auth'>
                            <button type="button" className="signUp">Войти</button>
                            </Link>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
 )
}
export default SignUp