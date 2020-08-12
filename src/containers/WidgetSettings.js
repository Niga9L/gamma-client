import React, {useState} from "react"
import {
  ButtonsMenu,  WidgetH2,
  WidgetPreview,  WidgetSettingButton,
  WidgetSQLBox,  WidgetSQLCodeBox,
  WidgetType, WidgetTypeBox
} from "../styled/Desktop";
import {PreviewWidget} from "../components/PreviewWidget";
import {useDispatch, useSelector} from "react-redux";
import {addWidget} from "../redux/actions";

export const WidgetSettings = props => {
  const currentDesktop = useSelector(state => state.desktop.currentDesktop)
  const dispatch = useDispatch()
  const [step, setStep] = useState(1)
  const [type, setType] = useState('')
  const data = [{"sid":"1003","name":"Sensor-1003","count":"26885"},{"sid":"1022","name":"Sensor-1022","count":"27096"},{"sid":"1029","name":"Sensor-1029","count":"27192"},{"sid":"11111","name":"Sensor-11111","count":"3"}]
  const [sqlCode, setSQLCode] = useState('select s.sid, s.name, g.count from (select e.sid, count(*) as count from dbo.ise_data e group by e.sid) g inner join dbo.sensors s on g.sid = s.sid;')

  const addWidgetHandler = () => {
    dispatch(addWidget(currentDesktop, type, sqlCode))
    props.onClose()
  }

  return(
    <>
      {step === 1 &&
        <WidgetTypeBox>
          <WidgetType
            onClick={() => {
              setType('sql')
              setStep(2)
            }}
          >
            SQL
          </WidgetType>

          <WidgetType
            onClick={() => {
              setType('diagram')
              setStep(2)
            }}
          >
            Diagram
          </WidgetType>
          <WidgetType
            onClick={() => {
              setType('map')
              setStep(2)
            }}
          >
            Map
          </WidgetType>
        </WidgetTypeBox>
      }
      {step === 2 &&
        <>
        {type === 'sql' &&
          <WidgetSQLBox>
            <WidgetPreview>
              <WidgetH2>Предпросмотр</WidgetH2>
              <PreviewWidget data={data}/>
            </WidgetPreview>

            <WidgetSQLCodeBox>
              <WidgetH2>SQL</WidgetH2>
              <p>код</p>
              <textarea value={sqlCode} onChange={event => setSQLCode(event.target.value)}/>
            </WidgetSQLCodeBox>
          </WidgetSQLBox>
        }
        {type === 'diagram' &&
        <p>Diagram</p>
        }
        {type === 'map' &&
        <p>MAP</p>
        }
      </>
      }
      {(step === 2 && type !== 'map') && <ButtonsMenu>
        <WidgetSettingButton
          className="material-icons"
          onClick={() => addWidgetHandler()}
        >
          save_alt
        </WidgetSettingButton>
        <WidgetSettingButton
          color={'#FF8500'}
          className="material-icons"
          onClick={() => setStep(1)}
        >
          undo
        </WidgetSettingButton>
      </ButtonsMenu>}
    </>
  )
}