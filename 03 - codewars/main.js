/*Numbers to Objects*/

function numObj(s){
  const arr = [];
  s.map(v => arr.push(String.fromCharCode(v)))
  const obj = Array.from({length:s.length}, x => x = {});
  obj.map((v,i) =>v [s[i]] = arr[i])
  return obj
}

/*Merged Objects.*/

function objConcat(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++){
    for (let key in arr[i]){
      obj[key] = (arr[i])[key];
    }
  }
  return obj
}

/*Return a sorted list of objects*/

function sortList (sortBy, list) {
  return list.sort(function(a, b) {    
    if (a[sortBy] < b[sortBy]) {
      return 1;
    } else if (a[sortBy] < b[sortBy]) {
      return 1;
    } else {
      return 0;
    }
  });
}