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

Array.prototype.contains = function(obj) {
    var i = this.length;
    while (i--) {
        if (this[i] === obj) {
            return true;
        }
    }
    return false;
}

function subString(s,begin, end){
  if (typeof end == "undefined"){
    end = s.length;
  }
  if(end < 0){
    return s.substring(begin,s.length+end);
  } else {
    return s.substring(begin,end);
  }
}

function radToDeg(r){
  return r*180/Math.PI;
}

function objToString(obj){
  var tmp = "";
  for (var i in obj) {
    tmp+= strf("{}:{}<br>",[i,obj[i]]);
  }
  return tmp;
}

function log(msg){
  $("#debug").html(msg);
}

function logxy(pt){
  log(strf("({},{})",[pt.x,pt.y]));
}
