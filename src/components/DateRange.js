import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { filterArticle } from '../AC/filters'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
    state = {
        from: null,
        to: null
    }

    handleDayClick = (e, day) => {
        const dayRange = DateUtils.addDayToRange(day, this.state);
        this.setState(dayRange)
        this.props.filterArticle(undefined, dayRange.from, dayRange.to)
    }

    render() {
        const { from, to } = this.state;
        const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
        return (
            <div className="date-range">
                <DayPicker
                    ref="daypicker"
                    selectedDays={ day => DateUtils.isDayInRange(day, this.state) }
                    onDayClick={ this.handleDayClick }
                />
                {selectedRange}
            </div>
        );
    }

}

export default connect(null, { filterArticle })(DateRange)