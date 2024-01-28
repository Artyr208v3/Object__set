function changeData (arr) {
  arr.forEach(item => {
      if (item.parent !== null) {
        item.children.push(item)
        changeData()
      }
  });
}



  const arr = [
    {
      id: 4,
      text: 'text 4',
      parent: 2,
      children: [1],
    },
    {
      id: 1,
      title: 'text 1',
      parent: 4,
      children: [6],
    },
    {
      id: 2,
      title: 'text 2',
      parent: null,
      children: [3, 4, 5],
    },
    {
      id: 3,
      title: 'text 3',
      parent: 2,
      children: [],
    },
    {
      id: 5,
      title: 'text 5',
      parent: 2,
      children: [],
    },
    {
      id: 6,
      title: 'text 6',
      parent: 1,
      children: [],
    },
  ]
 

  const result = buildTree(arr);
  console.log(JSON.stringify(result, null, 2));
