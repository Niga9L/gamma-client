import styled from "styled-components";

export const TabsContent = styled.div`
  width: 100%;
  display: flex;
  height: 45px;
  padding-left: 10px;
  padding-top: 5px;
  border-bottom: 3px solid rgba(32, 151, 201, .6);
`

export const TabItem = styled.div`
  position: relative;
`

export const TabBox = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #e4e4e4;
  max-width: 200px;
  padding: 10px 0 10px 15px;
  ${props => props.active ? `opacity: 1;` : `opacity: .6;`}
  ${props => props.active ? `border-top: 1px solid #07a5fb;` : 'cursor: pointer;'}
  ${props => props.active ? `background-color: #fff;` : null}
  
  :hover {
    background-color: #fff;
  }
`

export const TabIcon = styled.i`
  font-size: 14px;
  padding: 0 5px;
  cursor: pointer;
  
  :hover {
    color: #07a5fb;
  }
`

export const TabName = styled.p`
  ${props => {
    if (props.active) {
      return (
        `
        border-bottom: 1px dashed rgba(0, 0, 0, 0);
        outline: none;
        :hover {
           border-bottom: 1px dashed #07a5fb;
           cursor: pointer;
          }
        `
      )
    }
  }}
`

export const TabAdd = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #e4e4e4;
  padding: 0 5px;
  margin-left: 10px;
`

export const TabAddIcon = styled.i`
  padding: 0 10px;
  font-size: 20px;
  color: #444;
  cursor: pointer;
  opacity: .7;
  
  :hover {
    color: #07a5fb;
  }
`

export const ChangeName = styled.div`
  position: absolute;
  border: 1px solid #eee;
  background-color: #fff;
  box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.56);
  right: -330px; 
  top: -20px; 
  z-index: 1;
`

export const ChangeNameTitle = styled.h3`
  background: #fff;
  cursor: default;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  padding: 10px 14px 6px;
`

export const ChangeBox = styled.div`
  display: flex;
  padding: 5px 10px 15px;
`

export const ChangeInput = styled.input`
  min-width: 200px;
  padding-left: 6px;
  padding-right: 6px;
  font-size: 14px;
  border-radius: 3px;
  border: 1px solid #eee;
  outline: none;
  
  :focus {
    border: 1px solid black;
  }
`

export const ChangeButton = styled.i`
  margin-left: 10px;
  cursor: pointer;
  font-size: 16px;
  padding: 6px 18px;   
  font-weight: 600;
  border-radius: 3px;
  transition: box-shadow .28s cubic-bezier(.4, 0, .2, 1);
  ${props => props.primary ? `background-color: blue;` : `background-color: #fff;`}
  ${props => props.primary ? `color: #fff;` : `color: black; border: 1px solid #eee;`}
  
  :hover {  
  box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.56);
  }
`
