const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const getToday = () => {
  const addZero = number =>
    number < 10 ? '0' + number.toString() : number.toString()

  const dateObj = new Date()
  const month = monthNames[dateObj.getMonth()]
  const day = addZero(dateObj.getUTCDate().toString())
  const year = dateObj.getUTCFullYear().toString()

  return [month, day, year]
}
