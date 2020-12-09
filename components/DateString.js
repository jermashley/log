import { parseISO, format } from 'date-fns'

const DateString = ({
  timeStamp = new Date().toISOString(),
  dateFormat = `MMMM dd, yyyy`,
  className = null,
}) => {
  let date = parseISO(timeStamp)
  date = format(date, dateFormat)

  return <time className={className}>{date}</time>
}

export default DateString
