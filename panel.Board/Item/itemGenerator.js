//log("started loading ig");

function ItemGenerator(){
  this.genLine = function(id1,id2,lineC){
    var lineId = "line"+lineC.toString();

    if (lh.lineExists(id1,id2)){
      return;
    }
    lh.updateNoteToLines(id1,id2,lineId);
    lh.updateLineCxn(id1,id2,lineId);

    // creating visual component of line
    var newElem = strf("<img id = \"{}\" class = \"line\" src = \"pics/line.png\">",
                      [lineId]);
    $("#board").append(newElem);

    // creating obj in memory
    lh.addObj(lineId);

    //-------------------------orienting-the-visual-line-properly-------------
    var lineObj = lh.getObj(lineId);

    var obj1 = ih.getObj(id1);
    var obj2 = ih.getObj(id2);
    //log("done getting objs");

    var l1 = obj1.getRect();
    var l2 = obj2.getRect();
    var pts = this.gen2Pts(l1,l2);
    //log(strf("({},{}),({},{})",[pts[0].x,pts[0].y,pts[1].x,pts[1].y]));
    lineObj.updatePt1(pts[0]);
    lineObj.updatePt2(pts[1]);
    lineObj.updateDraw();
  }

  this.genNote = function(noteId){
    // create obj in memory
    ih.addObj(noteId);
    lh.updateNoteToLines(noteId,noteId,"default"); // does the init for the note to lines obj
  }

  this.gen2Pts = function(l1,l2){ // picks out two points along 2 lines
    var tmp = [];
    //log("picking");
    tmp.push({x:l1.x+ parseInt(Math.random()*l1.w),y:l1.y+l1.h});
    tmp.push({x:l2.x+ parseInt(Math.random()*l2.w),y:l2.y+l2.h});
    return tmp;
  }
}

var ig = new ItemGenerator();
