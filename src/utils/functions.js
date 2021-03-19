export  const categorySort = (data) => {
  let categories = {};
  for (let i = 0; i <= data.length - 1; i++) {
    data[i].acf.category.map(item => {
      if (categories[item]) {
        categories[item].push(data[i].acf.image);
      } else {
        categories[item] = [];
        categories[item].push(data[i].acf.image);
      }
    })
  }
  return categories;
};