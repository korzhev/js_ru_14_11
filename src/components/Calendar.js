import React, { Component } from 'react';
import moment from 'moment';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';
// import 'react-day-picker/styles/range.css';

export default class RangeAdvanced extends Component {

  state = {
    isSelectingLastDay: false,
    from: null,
    to: null,
  };

  handleDayClick = (e, day) => {
    const { from, isSelectingLastDay } = this.state;
    // Enable day selection on mouse enter
    if (!isSelectingLastDay) {
      this.setState({
        isSelectingLastDay: true,
        from: day,
        to: null,
      });
    }
    if (isSelectingLastDay && from && day < from) {
      // Reset the from-day if the clicked day is before the current from-day
      this.setState({
        from: day,
        to: null,
      });
    }
    if (isSelectingLastDay && DateUtils.isSameDay(day, from)) {
      // Reset everything if the clicked day is the same as the current from-day
      this.reset();
    }
    if (isSelectingLastDay) {
      // Unset the day selection on mouse enter
      this.setState({
        isSelectingLastDay: false,
      });
    }
  }

  handleDayMouseEnter = (e, day) => {
    const { isSelectingLastDay, from } = this.state;
    if (!isSelectingLastDay || (from && day < from) || DateUtils.isSameDay(day, from)) {
      return;
    }
    this.setState({
      to: day,
    });
  }

  reset = () => {
    this.setState({
      from: null,
      to: null,
      isSelectingLastDay: false,
    });
  }

  render() {
    const { from, to } = this.state;
    return (
      <div>
        { !from && !to && <p>Выберите <strong>первый день</strong>.</p> }
        { from && !to && <p>Выберите <strong>последний день</strong>.</p> }
        { from && to &&
        <p>
          Вы выбрали с { moment(from).format('L') } по { moment(to).format('L') }.
          { ' ' }<a onClick={ this.reset }>Reset</a>
        </p>
        }
        <DayPicker
          className="Range"
          numberOfMonths={ 1 }
          fromMonth={ from }
          selectedDays={ day => DateUtils.isDayInRange(day, { from, to }) }
          disabledDays={ day => this.state.from && day < this.state.from }
          modifiers={ {
            from: day => DateUtils.isSameDay(day, from),
            to: day => DateUtils.isSameDay(day, to),
          } }
          onDayClick={ this.handleDayClick }
          onDayMouseEnter={ this.handleDayMouseEnter }
        />
      </div>
    );
  }

}