const dayjs = require('dayjs');
var isBetween = require('dayjs/plugin/isBetween')
dayjs.extend(isBetween)

var exceptions = {
  "holidays": {
      "newYearsDay": dayjs('01/01/2021'),
      "mlkDay": dayjs('01/18/2021'),
      "goodFriday": dayjs('04/02/2021'),
      "easterDay": dayjs('04/04/2021'),
      "memorialDay": dayjs('05/31/2021'),
      "independenceDay": dayjs('07/04/2021'),
      "laborDay": dayjs('09/06/2021'),
      "thanksgivingDay": dayjs('11/25/2021'),
      "christmasDay": dayjs('12/25/2021')
  },
  "fallSemester": {
      "begin": dayjs('08/31/2020'),
      "midFallBreakBegin": dayjs('10/07/2020'),
      "midFallBreakEnd": dayjs('10/12/2021'),
      "homecoming": dayjs('10/17/2020'),
      "thanksgivingBreakBegin": dayjs('11/24/2020'),
      "thanksgivingBreakEnd": dayjs('12/01/2020'),
      "end": dayjs('12/19/2020')
  },
  "springSemester": {
      "begin": dayjs('01/13/2021'),
      "februaryException": dayjs('02/17/2021'),
      "marchFirstExceptionBegin": dayjs('03/04/2021'),
      "marchFirstExceptionEnd": dayjs('03/08/2021'),
      "marchSecondExceptionBegin": dayjs('03/13/2021'),
      "marchSecondExceptionEnd": dayjs('03/17/2021'),
      "end": dayjs('05/08/2021')
  }
}

function displayHours(date){
  if(dayIsHoliday(date)){
      return "Holiday!";
  }

  var semester = whichSemester(date);

  return `${date} (${semester})`;
}

function dayIsHoliday(date){
  var holidays = exceptions["holidays"];
  for(var holiday in holidays){
      console.log(holidays[holiday]);
  }
}

function whichSemester(date){
  if(dayjs(date).isBetween(dayjs(exceptions["fallSemester"]["begin"]), dayjs(exceptions["fallSemester"]["end"]))){
      return "Fall Semester";
  } else if (dayjs(date).isBetween(dayjs(exceptions["springSemester"]["begin"]), dayjs(exceptions["springSemester"]["end"]))) {
      return "Spring Semester";
  } else {
      return "Break";
  }
}