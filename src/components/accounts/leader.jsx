import React, { useState, useToggle } from 'react'
import { Avatar, AvatarGroup } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';


const Leader = ({children}) => {
  const [formData, setFormData] = useState({search: ''})
  
  const handleChange = (e) => {
    setFormData(prevFormData => {
      return {
      ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

    return (
    <div className='wrapper_leader'>
      <div className="acc-container">
        <div className="sidebar__container">
            <div className="logo">
                <img src="../public/imgs/logo.svg" alt="logo" className="logo" />
            </div>
            <div className="siidebar_navigation">
              <ul className="sidebar__list1">
                <button className='sidebar__btn' type='button' >
                <li className='li__account'>
                  <span className="sidebar__acc active">Личный кабинет</span>
                </li>
                </button>
                <button className='sidebar__btn'>
                <li className='li__conferences'>
                  <span className="sidebar__acc-conf">Конференции</span>
                </li>
                </button>
                <button className='sidebar__btn'>
                <li className='li__calendar'>
                  <span className="sidebar__acc">Календарь</span>
                </li>
              </button>
              <button className='sidebar__btn'>
                <li className='li__chat'>
                  <span className="sidebar__acc">Коллективный чат</span>
                </li>
              </button>
                <button className='sidebar__btn'>
                <li className='li__teaching'> 
                  <span className="sidebar__acc-teaching">Обучение</span>
                </li>
                </button>
                <button className='sidebar__btn'>
                <li className='li__statistics'>
                  <span className="sidebar__acc">Статистика</span>
                </li>
                </button>
                </ul>
                <ul className='sidebar__list'>
                <button className='sidebar__btn'> 
                <li className='li__documents'>
                  <span className="sidebar__acc-doc">Документы</span>
                </li>
                </button> 
                <button className='sidebar__btn'>
                <li className='li__settings'>
                  <span className="sidebar__acc">Настройки</span>
                </li>
                </button> 
                <button className='sidebar__btn'>
                <li className='li__logout'>
                  <span className="sidebar__acc">Выйти</span>
                </li>
                </button> 
                
              </ul>
            </div>
        </div>
        <div className="mainContent-container">
          <div className="personalAccount__container">
            <nav className='PA__nav'>
              <div className="PA__search">
                <img src="../public/imgs/search.svg" alt="search icon" />
                <input type="search" name="search" className='PA__input' onChange={handleChange} placeholder='Найти...' />
              </div>
              <div className="PA__pagesLinks">
                <a href="#" className='PA__navlink'><span>Обсуждения</span></a>
                <a href="#" className='PA__navlink'><span>Курсы</span></a>
                <a href="#" className='PA__navlink'><span>Блог</span></a>
                <button className="PA__workspaceLink">
                  <a href="#" className='PA__navlink-btn'><span>Рабочее пространство</span></a>
                  <img src="../public/imgs/workspace.svg" className='PA__worlspaceArrow' alt="icon" />
                </button>
              </div>
              <div className="personal_features">
                <button type="button" className='PA__btn'>
                  <img src="../public/imgs/messages.svg" alt="mail icon"/>
                </button>
                <button type="button" className='PA__btn'>
                <img src="../public/imgs/bell.svg" alt="mail icon"/>
                </button>
                <button type="button" className='PA__btn'>
                  <Avatar>Н</Avatar>
                </button>
              </div>
            </nav>
          </div>
            <div className="PA__left-info">
              <div className="left-container">
              <span className="PA__hello">Доброго времени суток!</span>
              <div className="PA__btnCards">
                <div className="PA__card">
                  <button type="button" className='PA__cardBtn'>
                    <img src="../public/imgs/card1.png" alt="image" />
                  </button>
                  <span className="PA__cardTitle">Grace Miller, M.D.</span>
                  <span className="PA__cardSubtitle">Neurologist</span>
                </div>
                <div className="PA__card">
                  <button type="button" className='PA__cardBtn'>
                    <img src="../public/imgs/card2.png" alt="image" />
                  </button>
                  <span className="PA__cardTitle">Grace Miller, M.D.</span>
                  <span className="PA__cardSubtitle">Neurologist</span>
                </div>
                <div className="PA__card">
                  <button type="button" className='PA__cardBtn'>
                    <img src="../public/imgs/card3.png" alt="image" />
                  </button>
                  <span className="PA__cardTitle">Grace Miller, M.D.</span>
                  <span className="PA__cardSubtitle">Neurologist</span>
                </div>
                <div className="PA__card">
                  <button type="button" className='PA__cardBtn'>
                    <img src="../public/imgs/card4.png" alt="image" />
                  </button>
                  <span className="PA__cardTitle">Grace Miller, M.D.</span>
                  <span className="PA__cardSubtitle">Neurologist</span>
                </div>
              </div>
              <div className="calendar__container">
              <div className="PA__collection">
                <div className="PA__favs">
                  <div className="PA__favsContainer">
                    <span className="PA__favorites">Избранное</span>
                    <button type="button" className='PA__editBtn'>
                      <img src="../public/imgs/blackSettings.svg" alt="edit icon" />
                    </button> 
                    <button type="button" className='PA__addBtn'>+</button>
                  </div>
                </div>
                <div className="chat">
                  <Avatar sx={{ width: 34, height: 34 }}>С</Avatar>
                  <div className="chatName">
                    <span className='person_name'>Софья Королева</span>
                    <span className="lastSeen">28 минут назад</span>
                  </div>
                </div>
                <div className="chat">
                  <Avatar sx={{ width: 34, height: 34 }}>В</Avatar>
                  <div className="chatName">
                    <span className='person_name'>Вероника Кочеткова</span>
                    <span className="lastSeen">2 часа назад</span>
                  </div>
                </div>
                <div className="PA__teams">
                  <div className="PA__team">
                    <div className="PA__teamcontainer">
                    <img src="../public/imgs/teamIcon.svg" alt="icon" />
                    <div className='PA__team-info'>
                      <span className="PA__teamName">Отдел Разработчиков</span>
                      <span className="numOfPpl">13 участников</span>
                    </div>
                      <AvatarGroup>
                        <Avatar alt="Cemy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} />
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 30, height: 30 }} />
                        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" sx={{ width: 30, height: 30 }} />
                      </AvatarGroup>
                    </div>
                    <div className="PA__team-info">
                      <div className="btns">
                        <button type="button" className='teamChat'>Чат</button>
                        <button type="button" className='hashtag'>#development</button>
                      </div>
                    </div>
                  </div>
                  <div className="PA__team">
                    <div className="PA__teamcontainer1">
                    <img src="../public/imgs/teamIcon.svg" alt="icon" />
                    <div className='PA__team-info'>
                      <span className="PA__teamName">Sole Fresh</span>
                      <span className="numOfPpl">8 участников</span>
                    </div>
                      <AvatarGroup className='avatarG'>
                        <Avatar alt="Фemy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} />
                        <Avatar alt="Аravis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 30, height: 30 }} />
                        <Avatar alt="Рgnes Walker" src="/static/images/avatar/4.jpg" sx={{ width: 30, height: 30 }} />
                      </AvatarGroup>
                    </div>
                    <div className="PA__team-info">
                      <div className="btns">
                        <button type="button" className='teamChat2'>Чат</button>
                        <button type="button" className='hashtag2'>#analytics</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="PA__yandex-team">
                  <div className="team__container">
                    <img src="../public/imgs/yandex-team.svg" alt="icon" />
                    <div className='Yandex-team'>
                      <span className="PA__teamNameFooter">Yandex Team</span>
                      <span className="workers">Сотрудники</span>
                    </div>
                    <AvatarGroup>
                        <Avatar alt="Фemy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 24, height: 24 }} />
                        <Avatar alt="Аravis Howard" src="/static/images/avatar/2.jpg" sx={{ width: 24, height: 24 }} />
                        <Avatar alt="Рgnes Walker" src="/static/images/avatar/4.jpg" sx={{ width: 24, height: 24 }} />
                      </AvatarGroup>
                  </div>
                      <div className="addInfo">
                      <div className="PA__team-addinfo">
                      <div className="footBtn">
                        <button type="button" className='teamChat3'>Чат</button>
                        <button type="button" className='hashtag4'>#product</button>
                      </div>
                      <div className="statistics">
                        <img src="../public/imgs/workers.svg" alt="icon" />
                        <span className='numberOfWorkers'>68 сотрудников</span>
                        <hr className='break'/>
                        <img src="../public/imgs/files.svg" alt="icon" />
                        <span className="numberofFiles">1068 файлов</span>
                      </div>
                    </div>
                      </div>
                </div>
              </div>
                <div className="PA__diagram"></div>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker orientation="portrait" />
              </LocalizationProvider>
              <div className="calendarBtn">
                <button type="button" className='addEventBtn'>Добавить событие</button>
                <button className='calendar__settingsBtn'>
                <img src="../public/imgs/settingsCalendar.svg" alt="" />
                </button>
              </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Leader