import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
    return (
        <header className='my-6 '
            style={{
                background: `url(${bg})`,
                'backgroundSize': '100% 100%',
                "backgroundRepeat": "no-repeat",
            }}
        >
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentist chair' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6 shadow-lg rounded-lg'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        ></DayPicker>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;