var recipes = {};
function updateObjectWithKeyAndValue(obj,key,value){
  var copy = Object.assign({},obj);
  obj[key] = value;
  return obj;
}
function destructivelyUpdateObjectwithKeyAndValue(obj,key,value){
  obj[key] = value;
  
  return obj;
}