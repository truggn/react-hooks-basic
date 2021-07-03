import React, { useEffect, useState } from 'react';


ClockApp.propTypes = {};


function formatDate(date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minute = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2)
    return `${hours}: ${minute} : ${seconds}`;
}

function ClockApp(props) {
    const [timeString, setTimeString] = useState('')


    useEffect(() => {
        const interval = setInterval(() => {

            // hh/mm/ss
            const now = new Date();
            const newTimeString = formatDate(now)
            setTimeString(newTimeString)
        }, 1000);
        return () => {
            // clean up
            console.log('Clock clean ');
            clearInterval(interval);
        }
    }, [])
    return (
        <div>
            <p style={{ fontSize: '42px' }}>{timeString}</p>
        </div>
    );
}

export default ClockApp;