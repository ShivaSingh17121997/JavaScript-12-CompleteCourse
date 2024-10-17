import React, { useEffect } from 'react'

export default function Hoc1(WrappedComponent) {

    return (props) => {

        return <div>
            <p>this is extra info added by Hoc</p>
            <WrappedComponent {...props} />
        </div>
    }
}


function mycomponent(props) {
    return <div>Hello,{props.name}</div>
}




































