let now = new Date();
alert(now);

let now2 = new Date(0); // means Jan1st 1970
alert(now2);

let date = new Date("2020-07-26");
alert(date);


/*
new Date(year, month, date, hours, minutes, seconds, ms)
Create the date with the given components in the local time zone. Only the first two arguments are obligatory.

The year must have 4 digits: 2013 is okay, 98 is not.
The month count starts with 0 (Jan), up to 11 (Dec).
The date parameter is actually the day of month, if absent then 1 is assumed.
If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.
*/


let date2 = new Date('2020', '07');  //means August 2020, not july 2020
alert(date2);

/*
getFullYear()
Get the year (4 digits)
getMonth()
Get the month, from 0 to 11.
getDate()
Get the day of month, from 1 to 31, the name of the method does look a little bit strange.
getHours(), getMinutes(), getSeconds(), getMilliseconds()
Get the corresponding time components.
*/

/*
The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ, where:

YYYY-MM-DD – is the date: year-month-day.
The character "T" is used as the delimiter.
HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
The optional 'Z' part denotes the time zone in the format +-hh:mm. A single letter Z that would mean UTC+0.
*/

let ms = Date.parse('2020-01-26T13:51:50.417-07:00');
alert(ms);

let date = new Date( Date.parse('2020-01-26T13:51:50.417-07:00') );
alert(date);