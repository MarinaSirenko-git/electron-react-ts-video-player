export function replaceBackslashes(arr) {
  const changedArr = arr.map(item => item.replace(/(\\)/g,'\\\\'))
  return changedArr;
}

export function getTime(ms){

  let date = new Date(ms)
  let time = []

  time.push(String(date.getUTCHours()).padStart(2, '0'))
  time.push(String(date.getUTCMinutes()).padStart(2, '0'))
  time.push(String(date.getUTCSeconds()).padStart(2, '0'))

  return time.join(':')
}

export function findIndex(arr, searchEl) {
  return arr.indexOf(searchEl, 0)
}