import React, { useEffect, useState } from 'react';

import { breakTime } from 'helpers/time';

const Time = () => {
    const [date, setDate] = useState(breakTime(new Date()));
    useEffect(() => {
        setInterval(() => {
            setDate(breakTime(new Date()));
        }, 1000);
    }, []);
    return (
        <h1>
            {date.hour}:{date.min}:{date.sec}
        </h1>
    );
};

export default Time;
