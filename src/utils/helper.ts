/* <--- all reusable functions must be called and exported from here ---> */

export const formatDate = (dateString: string): string => {
  const date: Date = new Date(dateString);
  const now: Date = new Date();

  const timeDifference: number = now.getTime() - date.getTime();

  const secondsDifference = Math.floor(timeDifference / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);
  const daysDifference = Math.floor(hoursDifference / 24);
  const weeksDifference = Math.floor(daysDifference / 7);
  const yearsDifference = Math.floor(daysDifference / 365);

  if (yearsDifference > 0) {
    return `${yearsDifference}y`;
  } else if (weeksDifference > 0) {
    return `${weeksDifference}w`;
  } else if (daysDifference > 0) {
    return `${daysDifference}d`;
  } else if (hoursDifference > 0) {
    return `${hoursDifference}h`;
  } else if (minutesDifference > 0) {
    return `${minutesDifference}m`;
  } else if (secondsDifference > 0) {
    return `${secondsDifference}s`;
  } else {
    return `now`;
  }
};
