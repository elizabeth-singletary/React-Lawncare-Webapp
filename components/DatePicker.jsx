'use client'
import { useState } from 'react';
import DatePicker from 'react-date-picker';



export default function DatePickerComp() {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
    </div>
  );
}