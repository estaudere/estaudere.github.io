import strftime from 'strftime';

const utc = strftime.utc();

export function formatTime(format, date) {
  return utc(format, new Date(date));
}