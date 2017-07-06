//log("started loading ig");

function ItemGenerator(){
  this.genLine = function(id1,id2,lineC){
    var lineId = "line"+lineC.toString();

    if (lh.lineExists(id1,id2)){
      //log("exists");
      return;
    }

    // creating visual component of line
    var newElem = strf("<img id = \"{}\" class = \"line  hidden\" src = \"pics/line.png\">",
                      [lineId]);
    $("#board").append(newElem);

    // creating obj in memory
    lh.addObj(lineId);

    lh.updateNoteToLines(id1,id2,lineId);

    lh.updateLineCxn(id1,id2,lineId);
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

  this.drawLines = function(noteId){
    log("begun with noteId:"+noteId);

    var lineIds = lh.getLines(noteId)
    var lineId;
    var lineObj;

    var currNote = ih.getObj(noteId);
    var cxnIds = currNote.getCxns();
    var currCxn;
    var pts;

    var i = 1;
    for (var currCxnId in cxnIds){ // the 0th index line is "default", skip it
      log("in loop");
      lineId = lineIds[i];

      lineObj = lh.getObj(lineId);
      log("reached");
      currCxn = ih.getObj(currCxnId);

      pts = this.gen2Pts(currNote.getRect(),currCxn.getRect());

      //log(strf("({},{}),({},{})",[pts[0].x,pts[0].y,pts[1].x,pts[1].y]));
      lineObj.updatePt1(pts[0]);
      lineObj.updatePt2(pts[1]);
      lineObj.updateDraw();

      lineObj.sf.toggleClass("hidden");
      i++;
    }
  }
}

var ig = new ItemGenerator();
