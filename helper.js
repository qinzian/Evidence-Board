function strf(str,args){
  for (var i = 0; i  < args.length; i++) {
    str = str.replace('{}',args[i].toString());
  }
  return str;
}

function range(p1,p2){
  if (typeof p2 == "undefined"){
    p2 = p1;
    p1 = 0;
  }
  var lst = [];
  for (var i = p1; i < p2; i++) {
    lst.push(i);
  }
  return lst;
}

function rmFromArr(arr,t){
  for (var i = 0; i < arr.length; i++) {
   if (arr[i] == t){
     arr.splice(i,1);
     return;
   }
  }
}

function log(msg){
  $("#debug").html(msg);
}
