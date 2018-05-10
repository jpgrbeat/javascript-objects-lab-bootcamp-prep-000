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
function deleteFromObjectByKey(object, key){
  var copy = Object.assign({},object);
  
  delete copy[key]
  
  return copy;
}

function destructivelyDeleteObjectByKey(object,key){
  delete object[key];
  
  return object;
}










