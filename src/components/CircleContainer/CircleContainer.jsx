import React from 'react';

const CircleContainer = (props) => {
    return (
        <div className="circle-container">
            <div 
                className="circle"
                style={{
                    backgroundColor: (props.currentBtn === 0) ? 'white' : 'green'
                }}
                >
                Circle 1
            </div>
            <div 
                className="circle"
                style={{
                    backgroundColor: (props.currentBtn === 1) ? 'white' : 'green'
                }}              
                >
                Circle 2
            </div>
            <div 
                className="circle"
                style={{
                    backgroundColor: (props.currentBtn === 2) ? 'white' : 'green'
                }}
                >
                Circle 3
            </div>
            <div 
                className="circle"
                style={{
                    backgroundColor: (props.currentBtn === 3) ? 'white' : 'green'
                }}
                >
                Circle 4
            </div>
        </div>
    );
}

export default CircleContainer;