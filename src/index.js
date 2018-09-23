class Sorter {constructor() {
  this.array = [];
  this.com =   this.com =function compareNumbers(a, b) {
    return a - b;
  }
  }
  
  add(element) {
  this.array.push(element);
  }
  
  at(k){
  return this.array[k];
  }
  
  get length(){
  return this.array.length;
  }
  
  toArray() {
  return this.array;
  }
  
  sort(indices) {
  var arr = [];
  for (var i = 0; i < indices.length; i++){
  arr[i] = this.array[indices[i]];
  }
  
  arr.sort(this.com);
  indices.sort(function compareNumbers(a, b) {
    return a - b;
  });
  for (var i = 0; i < indices.length; i++){
  this.array[indices[i]] = arr[i];
  }
  }
  
  setComparator(compareFunction) {
      this.com = compareFunction;
}
  }
  
  module.exports = Sorter;
