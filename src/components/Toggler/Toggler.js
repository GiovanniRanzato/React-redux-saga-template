import React, { useState } from 'react';
import Button from '../Ui/Button/Button';
// Props:
// showButton (string for toggler button label)
// hideButton (string for toggler button label)

const Toggler = (props) => {
    const [toggle, setToggle] = useState(false);
    const showButton = <Button key={'showBtn'} btnType={'Success'} clicked={() => { setToggle(true) }}>{props.showButton}</Button>
    const hideButton = <Button key={'hideBtn'} btnType={'Danger'} clicked={() => { setToggle(false) }}>{props.hideButton}</Button>
    let render = null;
    if (!toggle) {
        render = showButton
    } else {
        render = [props.content, hideButton]
    }
    return <React.Fragment>
        {render}
    </React.Fragment>
}
export default Toggler