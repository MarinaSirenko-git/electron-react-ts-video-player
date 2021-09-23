export function replaceBackslashes(arr: string[]) {
  const changedArr = arr.map(item => item.replace(/(\\)/g,'\\\\'))
  return changedArr;
}

export function getTime(ms: number){

  let date = new Date(ms)
  let time = []

  time.push(String(date.getUTCHours()).padStart(2, '0'))
  time.push(String(date.getUTCMinutes()).padStart(2, '0'))
  time.push(String(date.getUTCSeconds()).padStart(2, '0'))

  return time.join(':')
}

export function findIndex(arr: string[], searchEl: string) {
  return arr.indexOf(searchEl, 0)
}