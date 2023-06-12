const formatDate = (timestamp: string) => {
  const date = new Date(parseInt(timestamp));

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour12: false
  };

  const formatter = new Intl.DateTimeFormat('ru-RU', options);
  return formatter.format(date);
};

export default formatDate;
