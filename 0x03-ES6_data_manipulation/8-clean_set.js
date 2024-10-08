export default function cleanSet(set, startString) {
  const arr = [];
  set.forEach((ele) => {
    if (ele.startsWith(startString) && startString.length > 0)
      arr.push(ele.slice(startString.length));
  });
  return arr.join('-');
}
