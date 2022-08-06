const list = [
  {
    id: 1,
    title : 'js'
  },
  {
    id: 2,
    title: 'C#'
  }
]

function ArrayExample() {
  return list.map(function(item) 
  {
    return (
      <div key={item.id}>
        <span>{item.id} </span>
        <span>{item.title} </span>
      </div>
    )
  });
};

export default ArrayExample;