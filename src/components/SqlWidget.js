import React from "react";
import {OverflowBox, WidgetContent} from "../styled/Desktop";
import uniqid from "uniqid";

export const SqlWidget = props => {
  const data = props.data
  console.log(props)

  return(
    <WidgetContent className='widgetContent'>
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
  )
}