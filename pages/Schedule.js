import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import moment from 'moment'
import buildCalendar from '../components/Build'

const Schedule = () => {

    const [calendar, setCalendar] = useState([])
    const [value, setValue] = useState(moment())

    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])

    // const startDay = value.clone().startOf('month').startOf('week')
    // const endDay = value.clone().endOf('month').endOf('week')

    return (
        <>
            <Head>
                <title>TouchMyLike</title>
                <meta name="keywords" content="TouchMyLike" />
                <link rel="icon" href="/image/touchmylike_logo.ico" />
            </Head>
            <div className='calendar-container'>
                <div className="calendar-header">
                    <h1>
                        มิถุนายน
      <button>▾</button>
                    </h1>
                    <p>2564</p>
                </div>
                <div className='calendar'>
                    <span className="day-name">อา</span>
                    <span className="day-name">จ</span>
                    <span className="day-name">อ</span>
                    <span className="day-name">พ</span>
                    <span className="day-name">พฤ</span>
                    <span className="day-name">ศ</span>
                    <span className="day-name">ส</span>
                    {
                        calendar.map((week) => (
                            week.map((day) => (
                                <div onClick={() => console.log('ddd')} className={`selector_day${value.isSame(day, 'day') ? ' selected' : ''}`}>
                                    <div>{day.format('D').toString()}</div>
                                </div>
                            ))

                        ))
                    }</div>
            </div>
        </>

    )
}

//className={`day${value.isSame(day, 'day') ? ' selected' : ''}`}

export default Schedule