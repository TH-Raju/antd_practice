import { DatePicker, TimePicker } from "antd";
const DatePickers = () => {
  return (
    <div>
      <h1>DatePicker</h1>
      <DatePicker />
      <DatePicker picker="month" />
      <DatePicker picker="year" />
      <DatePicker picker="quarter" />
      <br />
      <br />
      <DatePicker.RangePicker />

      <br />
      <br />
      <TimePicker />
    </div>
  );
};

export default DatePickers;
