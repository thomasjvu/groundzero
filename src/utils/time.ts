// Define the time units
const months: string[] = [
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
  'December',
]

// const days: string[] = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ]

// const monthsAbbr: string[] = [
//   'Jan',
//   'Feb',
//   'Mar',
//   'Apr',
//   'May',
//   'Jun',
//   'Jul',
//   'Aug',
//   'Sep',
//   'Oct',
//   'Nov',
//   'Dec',
// ]

const daysAbbr: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const units: { [key: string]: number } = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
}

// You probably want to change this to your own locale
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })


// Get relative time without libraries like moment.js or dayjs (ie '2 days ago')
type RelativeTimeUnit = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';

function getRelativeTime(d1: Date, d2: Date = new Date()): string | undefined {
  const elapsed = d1.getTime() - d2.getTime();
  for (const u in units) {
    if (Math.abs(elapsed) > units[u as keyof typeof units] || u === 'second') {
      const validUnits: RelativeTimeUnit[] = ['year', 'month', 'day', 'hour', 'minute', 'second'];
      if (validUnits.includes(u as RelativeTimeUnit)) {
        return rtf.format(Math.round(elapsed / units[u as keyof typeof units]), u as RelativeTimeUnit);
      }
    }
  }
}

// Format date to be more readable
function getFriendlyDate(dateString: string): string {
  const d = new Date(dateString)
  const year = d.getFullYear()
  const date = d.getDate()
  const dateSuffix = (date: number): string => {
    if (date > 3 && date < 21) return 'th'
    switch (date % 10) {
      case 1:
        return 'st'
      case 2:
        return 'nd'
      case 3:
        return 'rd'
      default:
        return 'th'
    }
  }
  const monthIndex = d.getMonth()
  const monthName = months[monthIndex]
  const dayName = daysAbbr[d.getDay()]
  const formatted = `${dayName}, ${monthName} ${date}${dateSuffix(
    date
  )}, ${year}`
  return formatted
}

// Greeting for user based on time of day
function greetUser(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Good Morning'
  if (hour < 18) return 'Good Afternoon'
  return 'Good Evening'
}

export { getRelativeTime, getFriendlyDate, greetUser }
