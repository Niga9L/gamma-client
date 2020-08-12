import React from "react";
import {HeaderContent, Logo, List, Toolbar, ListItem, Icon, Profile} from "../styled/Header";

const menu = [
  'Мониторинг',
  'Сенсоры',
  'Инциденты',
  'Правила',
  'События',
  'Отчеты',
  'МПИВИ',
  'Настройки'
]

export const Header = () => {

  return (
    <HeaderContent>
      <Logo href='#'>МСОКА</Logo>
      <List>
        {menu.map((item, index) => {
          if (index === 0) {
            return (
              <ListItem key={index} active={true}>{item}</ListItem>

            )
          } else {
            return (
              <ListItem key={index}>{item}</ListItem>
            )
          }
        })}
      </List>
      <Toolbar>
        <Icon className="material-icons">exit_to_app</Icon>
        <Profile href='#profile'>admin</Profile>
        <Icon className="material-icons">notifications_none</Icon>
      </Toolbar>
    </HeaderContent>
  )
}