import React from 'react';

const Buttons = (props) => (
    <div>
        {props.buttons.map((btn, idx) =>
            <button 
                key={btn}
                onClick={() => props.handleBtnSelection(idx)}
            >Button {idx + 1}</button>
        )}
    </div>
);

export default Buttons;