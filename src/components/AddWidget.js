import React, {useState} from "react";
import {AddWidgetBox, AddWidgetButton} from "../styled/Desktop";
import {WidgetSettings} from "../containers/WidgetSettings";

export const AddWidget = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && <AddWidgetBox>
        <WidgetSettings onClose={() => setOpen(false)}/>
      </AddWidgetBox>}
      <AddWidgetButton onClick={() => setOpen(!open)}>
        <i className="material-icons">{open ? 'close' : 'add'}</i>
      </AddWidgetButton>
    </>

  )
}