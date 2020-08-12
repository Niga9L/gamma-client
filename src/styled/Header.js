import styled from "styled-components";

export const List = styled.ul`
  text-decoration: none;
  width: 100%; 
  display: flex;
  margin-left: 150px;
`

export const HeaderContent = styled.div`
  background: #454d58;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`

export const Logo = styled.a`
  font-size: 24px;
  font-weight: 900;
  line-height: 17px;
  display: block;
  color: #00b5e2;
  text-decoration: none !important
  
`

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 20px;
`
export const ListItem = styled.li`
  font-size: 13px;
  text-transform: uppercase;
  list-style-type: none;
  cursor: pointer;
  padding: 30px 15px 20px;
  ${props => props.active ? `border-bottom: 10px solid #fff;` : null} 
  ${props => props.active ? `color: #fff;` : 'color: #C1CCD1;'} 
  
  :hover {
    ${props => props.active ? null : `color: #31c5d1;`} 
  }
`

export const Icon = styled.i`
  color: #C1CCD1;
  cursor: pointer;
  :hover {
    ${props => props.active ? null : `color: #31c5d1;`} 
  }
`

export const Profile = styled.a`
  align-items: center;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: #8ea3b6;
  :hover {
  color: #7089a2;
  }
`

