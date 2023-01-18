const CurrentDate = () => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentDay = currentDate.getDate()
  const options = { month: 'long'}
  const currentMonth = new Intl.DateTimeFormat('en-US', options).format(currentDate)
  const formatCurrentMonth = currentMonth.slice(0, 3).toUpperCase()

  return (
    <span className="text-gray-600 pt-2">
      {`${currentDay} ${formatCurrentMonth} ${currentYear}`}
    </span>
  )
}

export default CurrentDate;