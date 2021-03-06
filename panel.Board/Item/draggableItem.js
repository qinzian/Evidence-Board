function DraggableItem(t,id) {
  BoardObj.call(this, t,id);
  this.sf.draggable();
  //log("called draggable");

  this.drag = false;

  this.setDrag = function(d){
    this.drag = d;

    if (this.type !== "note"){
      return;
    }

    if(this.drag){ // alter appearence of notes when dragging
      $("#"+this.id).addClass("located");/**/
    } else {
      $("#"+this.id).removeClass("located");/**/
    }
  }

  this.getDrag = function(){
    return this.drag;
  }
}
DraggableItem.prototype = Object.create(BoardObj.prototype);
DraggableItem.prototype.constructor = DraggableItem;
