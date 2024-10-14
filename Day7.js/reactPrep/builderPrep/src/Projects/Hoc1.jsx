import React, { useEffect } from 'react'

export default function Hoc1(wrappedComponent) {

    return function withlogger(props) {
        useEffect(() => {
            console.log(`Component ${wrappedComponent.name} is mounter`);

            return () => {
                console.log(`component ${wrappedComponent.name} is mounted`)
            }

        }, [])

        return <wrappedComponent {...props} />
    }
}


































function helloComponent({ name }) {
    return <h1>Hello,{name}!</h1>
}

// useHoc

const hoc1 = withlogger(helloComponent)