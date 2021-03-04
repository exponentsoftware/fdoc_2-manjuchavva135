const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]

  countries.forEach(myFunction); 
  function myFunction(item, index) 
  { 
    var arr = new Array;
    arr.push(item);
    arr.push(item.slice(0,3))
    arr.push(item.length)
    console.log(arr)
  }
