import React from "react";
import {
  OverflowBox,
  PreviewBox,
  RnDHeader,
  RnDIcon,
  RnDropMenu,
  RnDTitle,
  RnDTools,
  WidgetContent
} from "../styled/Desktop"
import uniqid from 'uniqid'

export const PreviewWidget = props => {
  const data = props.data

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
      <WidgetContent>
        <OverflowBox maxHeight={props.maxHeight}>
        <table>

            <thead>
              <tr>
                  {Object.keys(data[0]).map((node, idx) => <th key={idx}>{node}</th>)}
              </tr>
            </thead>
            <tbody>

                {data.map(node => {
                  return (
                    <tr key={uniqid()}>
                      {Object.keys(node).map((td) => <td key={uniqid()}>{node[td]}</td>)}
                    </tr>
                  )
                })}

            </tbody>

        </table>
        </OverflowBox>
      </WidgetContent>
    </PreviewBox>
  )
}