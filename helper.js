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
  var i = arr.indexOf(t);

  if (i > -1){
    arr.splice(i,1);
  }
}

function rpFromArr(arr,oldItem,newItem){
  var i = arr.indexOf(oldItem);

  if (i > -1){
    arr[i] = newItem;
  }
}

function log(msg){
  $("#debug").html(msg);
}
