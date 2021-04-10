export  const categorySort = (data) => {
  let categories = {};
  for (let i = 0; i <= data.length - 1; i++) {
    data[i].acf.category.map(item => {
      if (categories[item.toLowerCase()]) {
        categories[item.toLowerCase()].push({...data[i].acf.image, mainTitle: data[i].title.rendered});
      } else {
        categories[item.toLowerCase()] = [];
        categories[item.toLowerCase()].push({...data[i].acf.image, mainTitle: data[i].title.rendered});
      }
    })
  }
  return categories;
};