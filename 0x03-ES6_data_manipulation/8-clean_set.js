export default function cleanSet(set, startString) {
  const arr = [];
  // prettier-ignore
  if (!startString || !startString.length || typeof startString !== 'string') return '';

  set.forEach((ele) => {
    // prettier-ignore
    if (ele && ele.startsWith(startString)) arr.push(ele.slice(startString.length));
  });
  return arr.join('-');
}
