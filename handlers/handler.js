function Handler(){
  this.idToObj = {}; // dict of id : obj
  this.titleToId = {}; // dict of title : ids
  this.titles = [];

  this.getDict = function(){
    return this.idToObj;
  }

  this.getTitles = function(){
    return this.titles;
  }

  this.getTitlesDict = function(){
    return this.titleToId;
  }

  this.getObj = function(id){
    if (this.idToObj.hasOwnProperty(id)){
      return this.idToObj[id];
    }
    log("ih cannot find obj for id:"+id.toString());
  }

  this.addObj = function(id){
    log("ih.addObj()");
    if (this.idToObj.hasOwnProperty(id)){
      log("obj with id: "+id+" already exists, cannot add");
    } else {
      this.idToObj[id] = new Note(id); // pairs id of visual to the corresponding obj in memory
      this.titleToId[id] = id; // starting titles are same as id
      this.titles.push(id);
      //log("added a note with id:"+id);
    }
  }

  this.rmObj = function(id){
    if (this.idToObj.hasOwnProperty(id)){
      var t = this.idToObj[id].getTitle();

      rmFromArr(this.titles,t);
      delete this.titleToId[t];
      delete this.idToObj[id];
    } else {
      log("obj with id: "+id+" DNE cannot rm");
    }
  }

  this.updateObjTitle = function(id,newTitle){
    log("called");
    var currId;
    for(var t in this.titleToId){
      currId = this.titleToId[t];
      if(currId == id){
        rpFromArr(this.titles,t,newTitle); // args (arr,oldTitle,newTitle)
        delete this.titleToId[t];
        this.titleToId[newTitle] = id;
        return;
      }
    }
  }

  this.toString = function(){
    var tmp;
    for (var title in this.titleToId) {
      tmp += title+", ";
    }
    return strf("IH: {} objs, titles: {}",[this.idToObj.length,tmp]);
  }
  //log("done ih init");
}

var ih = new Handler();
