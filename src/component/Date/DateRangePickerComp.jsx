import React, { useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import format from 'date-fns/format';
import { subDays } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import '@fortawesome/fontawesome-free/css/all.css'; 
import './DateRangePickerComp.css';

const DateRangePickerComp = ({ style, onSelectDateRange, applyMaxDate }) => {
    const [range, setRange] = useState([
        {
            startDate: subDays(new Date(), 7),
            endDate: subDays(new Date(), 1),
            key: 'selection',
        },
    ]);
    const [tempRange, setTempRange] = useState(range);
    const [open, setOpen] = useState(false);
    const refOne = useRef(null);

    useEffect(() => {
        document.addEventListener('keydown', hideOnEscape, true);
        document.addEventListener('click', hideOnClickOutside, true);
        return () => {
            document.removeEventListener('keydown', hideOnEscape, true);
            document.removeEventListener('click', hideOnClickOutside, true);
        };
    }, []);

    const hideOnEscape = (e) => {
        if (e.key === 'Escape') {
            setOpen(false);
        }
    };

    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setOpen(false);
        }
    };

    const handleSelect = (item) => {
        setTempRange([item.selection]);
    };

    const handleApply = () => {
        setRange(tempRange);
        setOpen(false);
        onSelectDateRange(tempRange[0]); // Meneruskan rentang tanggal yang dipilih ke parent component
    };

    return (
        <div className="calendarWrap">
            <div className="inputBoxContainer">
                <input
                    value={`${format(range[0].startDate, 'dd MMM yyyy')} - ${format(range[0].endDate, 'dd MMM yyyy')}`}
                    readOnly
                    className="inputBox"
                    onClick={() => setOpen(!open)}
                />
                <i className="fas fa-calendar-alt calendarIcon" onClick={() => setOpen(!open)}></i>
                <i className="fas fa-caret-down dropdownIcon" onClick={() => setOpen(!open)}></i>
            </div>
            <div ref={refOne}>
                {open && (
                    <div className="calendarContainer">
                        <DateRangePicker
                            onChange={handleSelect}
                            editableDateInputs={true}
                            moveRangeOnFirstSelection={false}
                            ranges={tempRange}
                            months={1}
                            direction="horizontal"
                            className="calendarElement"
                            maxDate={applyMaxDate ? subDays(new Date(), 1) : undefined}
                        />
                        <button className="applyButton" onClick={handleApply}>
                            Apply
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DateRangePickerComp;
