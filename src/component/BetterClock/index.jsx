import React from 'react';
import useClock from '../../hooks/useClock';
import './BetterClock.scss'


BetterClock.propTypes = {};

function BetterClock() {

    const { timeString } = useClock();

    return (
        <div className='better_clock'>
            <p className='better_clock__time'>{timeString}</p>
        </div>
    );
}

export default BetterClock;