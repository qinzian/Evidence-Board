function ItemGenerator(){
  this.visible = false;
  this.noteC = 0;
  this.picC  = 0;
  this.id;

  this.genLine = function (obj1,obj2,x,y){

  }

  this.genNote = function(x,y){
    //log(strf('double clicked @ ({},{})',[x,y]));

    this.id = "note" + this.noteC.toString();

    // create visual
    var newElem = strf("<p id = '{}' class = 'boardObj note'  "+
    "ng-click = 'clickedBoardObj(this.id)'  "+
    "ng-dblclick = 'dblclickedBoardObj(this.id)'  "+
    "ondrag  = 'dragBoardObj(this.id)'  "+
    ">{}</p>",[this.id,this.id]);

    var btnhtml = '<button type="button" ng-click="addButton()">Click Me</button>';
    var temp = $compile(btnhtml)($scope);

    //Let's say you have element with id 'foo' in which you want to create a button
    angular.element(document.getElementById('foo')).append(temp);

    $("#board").prepend(newElem);

    $("#"+this.id).css({left:x-40, top:y-40});

    // create obj in memory
    ih.addObj(new Note(this.id));

    this.noteC++;
    //log('reached end');
  }

  this.genPic = function(x,y){

  }

}

var ig = new ItemGenerator();


//log("loaded ig");
