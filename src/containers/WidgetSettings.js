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
  const data = [{"time":"2020-08-05 14:21:00","sid":"11111","sip":"10.98.19.13","dip":"10.98.19.1","sp":"51181","dp":"33089","ac":"96080058","signatures":"\"NCCCI WEB Informix Error in HTTP 200 Response\"","source_country":"","dest_country":""},{"time":"2020-08-04 16:36:21","sid":"1022","sip":"140.61.242.6","dip":"193.56.179.54","sp":"51180","dp":"33089","ac":"2011667","signatures":"\"ET ATTACK_RESPONSE Backdoor reDuh http initiate\"","source_country":"united states","dest_country":"united kingdom"},{"time":"2020-08-04 16:36:11","sid":"1022","sip":"199.242.225.0","dip":"219.202.20.111","sp":"51180","dp":"33089","ac":"2007757","signatures":"\"ET SCAN w3af User Agent\"","source_country":"united states","dest_country":"japan"},{"time":"2020-08-04 16:36:01","sid":"1022","sip":"69.157.174.106","dip":"104.27.136.56","sp":"51180","dp":"33089","ac":"2011487","signatures":"\"ET FTP Suspicious Percentage Symbol Usage in FTP Username\"","source_country":"canada","dest_country":"united states"},{"time":"2020-08-04 16:35:51","sid":"1003","sip":"10.98.19.1","dip":"120.53.38.0","sp":"51180","dp":"33089","ac":"900522004","signatures":"","source_country":"","dest_country":""},{"time":"2020-08-04 16:30:34","sid":"1022","sip":"76.63.198.44","dip":"146.18.208.121","sp":"51180","dp":"33089","ac":"38586","signatures":"\"MALWARE-CNC Win.Backdoor.DFSCook variant outbound connection\"","source_country":"united states","dest_country":"united states"},{"time":"2020-08-04 16:30:24","sid":"1022","sip":"202.13.190.70","dip":"47.27.42.27","sp":"51180","dp":"33089","ac":"2022004","signatures":"","source_country":"japan","dest_country":"united states"},{"time":"2020-08-04 16:30:14","sid":"1003","sip":"81.8.83.27","dip":"163.6.31.26","sp":"51180","dp":"33089","ac":"48394","signatures":"\"OS-WINDOWS Microsoft Windows Win32k information disclosure attempt\"","source_country":"","dest_country":""},{"time":"2020-08-04 16:30:04","sid":"1003","sip":"163.6.31.26","dip":"120.53.38.0","sp":"51180","dp":"33089","ac":"2009022","signatures":"\"ET TROJAN Zlob User Agent (securityinternet)\"","source_country":"","dest_country":""},{"time":"2020-08-04 16:29:54","sid":"1022","sip":"49.102.235.125","dip":"27.111.18.20","sp":"51180","dp":"33089","ac":"2008919","signatures":"\"ET USER_AGENTS Suspicious User-Agent pricers.info related (section)\"","source_country":"singapore","dest_country":"nepal"},{"time":"2020-08-04 16:29:44","sid":"1003","sip":"81.8.83.27","dip":"52.177.30.87","sp":"51180","dp":"33089","ac":"2009022","signatures":"\"ET TROJAN Zlob User Agent (securityinternet)\"","source_country":"","dest_country":""},{"time":"2020-08-04 16:29:34","sid":"1029","sip":"63.58.109.107","dip":"137.213.239.31","sp":"51180","dp":"33089","ac":"2011667","signatures":"\"ET ATTACK_RESPONSE Backdoor reDuh http initiate\"","source_country":"united states","dest_country":"united kingdom"},{"time":"2020-08-04 16:29:24","sid":"1003","sip":"81.8.83.27","dip":"163.6.31.26","sp":"51180","dp":"33089","ac":"48394","signatures":"\"OS-WINDOWS Microsoft Windows Win32k information disclosure attempt\"","source_country":"","dest_country":""},{"time":"2020-08-04 16:29:14","sid":"1022","sip":"114.174.116.113","dip":"114.84.3.0","sp":"51180","dp":"33089","ac":"48394","signatures":"\"OS-WINDOWS Microsoft Windows Win32k information disclosure attempt\"","source_country":"japan","dest_country":"china"},{"time":"2020-08-04 16:29:04","sid":"1029","sip":"165.24.168.37","dip":"79.101.243.121","sp":"51180","dp":"33089","ac":"2011667","signatures":"\"ET ATTACK_RESPONSE Backdoor reDuh http initiate\"","source_country":"united states","dest_country":"serbia"}]
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
              <PreviewWidget data={data} maxHeight={500}/>
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