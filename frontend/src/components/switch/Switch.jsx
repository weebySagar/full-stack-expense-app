import { useEffect, useState } from "react";
import '@styles/switch/switch.scss'

export function Switch(props) {
    // state
    const [on, setOn] = useState(props.default);

    function toggle() {
        setOn(!on);
        props.onChange(props.name, !on, true);
    }

    useEffect(() => {
        setOn(props.default);
    }, [props.default]);

    return (
        <div className={`switch ${props.className}`} style={props.style}>
            <label></label>

            <div className={`track ${on ? 'trackOn' : 'trackOff'}`} onClick={toggle}>
                <div className={`handle ${on ? 'handleOn' : 'handleOff'}`}></div>
            </div>
        </div>
    );
}
