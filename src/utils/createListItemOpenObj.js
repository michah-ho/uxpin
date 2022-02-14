const createListItemOpenObj = (arr) => {
  const listItemObj = {};
  arr.forEach((item, idx) => {
    const newKey = `${item.name}-${idx}`;
    if (!listItemObj[newKey]) {
      listItemObj[newKey] = true;
    }
  });
  return listItemObj;
}

export default createListItemOpenObj;