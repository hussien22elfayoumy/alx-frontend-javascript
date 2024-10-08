export default function cleanSet(set, startString) {
  const arr = [];

  if (startString.length === 0) return '';

  set.forEach((ele) => {
    if (ele.startsWith(startString)) arr.push(ele.slice(startString.length));
  });
  return arr.join('-');
}
