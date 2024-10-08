export default function cleanSet(set, startString) {
  // prettier-ignore
  if (!startString || !startString.length || typeof startString !== 'string') return '';

  let finalString = '';
  set.forEach((element) => {
    // prettier-ignore
    if (element && element.startsWith(startString)) finalString += `${element.slice(startString.length)}-`;
  });

  return finalString.slice(0, finalString.length - 1);
}
