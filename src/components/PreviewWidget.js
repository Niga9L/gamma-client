import React from "react";
import {PreviewBox, RnDHeader, RnDIcon, RnDropMenu, RnDTitle, RnDTools} from "../styled/Desktop"

export const PreviewWidget = props => {
  const data = props.data
  const columns = Object.keys(data[0]).length
  console.log(columns)
  console.log(data)
  return (
    <PreviewBox>
      <RnDHeader>
        <RnDTitle>Активность сенсоров</RnDTitle>
        <RnDTools>
          <RnDropMenu>
            <RnDIcon
              className="material-icons"
              style={{fontSize: '22px'}}
            >
              swap_horiz
            </RnDIcon>
          </RnDropMenu>
          <RnDIcon className="material-icons" style={{fontSize: '16px'}}>build</RnDIcon>
          <RnDIcon className="material-icons">cached</RnDIcon>
          <RnDIcon
            className="material-icons"
            style={{fontSize: '16px'}}
          >
            open_in_full
          </RnDIcon>
          <RnDIcon
            className="material-icons"
            style={{fontSize: '20px'}}
          >
            close
          </RnDIcon>
        </RnDTools>
      </RnDHeader>

    </PreviewBox>
  )
}