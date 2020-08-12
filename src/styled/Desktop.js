import styled from "styled-components";

export const ResizerBox = styled.div`
  margin: 10px 10px 10px 6px;
  ${() => `min-height: calc(100vh - 140px);`}
`

export const DashboardBox = styled.div`
  position: relative;
`

export const AddWidgetButton = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #2db3fc;
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 15px;
  right: 30px;
  z-index: 150;
  & i {
    font-size: 25px;
    color: #fff;
    
  
  ::selection {
  background: none;
  }
  }
  
  :hover {
  background: #07a5fb;
  }
`

export const AddWidgetBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 140;
  background: #fff;
`

export const WidgetType = styled.button`
  text-decoration: none;
  height: 80px;
  border: none;
  cursor: pointer;
  outline: none;
  display: inline-block;
  padding: 12px 40px;
  margin: 10px 20px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: white;
  box-shadow: 0 16px 32px 0 rgba(0,40,120,.35);
  transition: .5s;

  :hover {
    box-shadow: 0 0 0 0 rgba(0,40,120,0);
    background-position: 0 0;
  }

`

export const WidgetTypeBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  height: 30vh;
  align-items: center;
  margin: 0 auto;
`

export const WidgetSettingStep = styled.div`

`

export const WidgetPreview = styled.div`
  margin: 40px 130px;  
`

export const WidgetH2 = styled.h2`
  font-weight: 600;
  margin-bottom: 50px;
  font-size: 18px;
  color: #505050;
`

export const WidgetSettingButton = styled.i`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${({color}) => color || '#3AA6D0'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  color: #fff;  
  :hover {
    background-color: ${props => props.color ? '#FFA340': '#62B1D0'};
  }
`
export const ButtonsMenu = styled.div`
  display: flex;
  width: 150px;
  align-content: center;
  justify-content: space-between;
  position: absolute;
  bottom: 15px;
  right: 50%;
  left: 45%;
`

export const WidgetSQLCodeBox = styled.div`
  width: 600px;
  height: 60vh;
  margin: 40px 0;
  
  & > h2 {
    margin-bottom:35px;
  }
  
  & > p {
    color: #5ED2B8;
    font-size: 18px;
  }
  
  & textarea {
    width: 100%;
    height: 100%;
    resize: none;
    background-color: #eee;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 14px;
    border-bottom: 1px solid lawngreen;
  }
  
`

export const WidgetSQLBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 60px;
`

export const PreviewBox = styled.div`
  display: inline-block;
  width: 800px;
  height: 500px;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, .06);
`

export const RnDHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
`

export const RnDTitle = styled.h2`
  text-transform: uppercase;
  color: rgb(105, 105, 101);
  min-width: 400px;
  text-overflow: ellipsis; 
  white-space: nowrap;
  overflow: hidden; 
  font-weight: 600;
  padding-right: 15px;
  font-size: 14px;
  letter-spacing: 0;
`

export const RnDTools = styled.div`
  display: flex;
  align-items: center;
`

export const RnDIcon = styled.i`
  cursor: pointer;
  font-size: 18px;
  color: #afafaf;
  margin-right: 3px;
  
  :hover {
  color: #07a5fb;
  }
`

export const ListDesktop = styled.ul`
  list-style: none;
`

export const DesktopListsBox = styled.div`
  position: absolute;
  right: 0;
  background: #fff;
  width: 250px;
  box-shadow: 0 2px 3px 2px rgba(0, 0, 0, .06);
`

export const DesktopList = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  
  :hover {
    background-color: #eee;
  }
`

export const RnDropMenu = styled.div`
  position: relative;
`