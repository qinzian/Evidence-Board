function DraggableItem(t,id) {
  BoardObj.call(this, t,id);
  this.sf.draggable();

  this.drag = false;

  this.setDrag = function(d){
    this.drag = d;
  }

  this.getDrag = function(){
    return this.drag;
  }
}
DraggableItem.prototype = Object.create(BoardObj.prototype);
DraggableItem.prototype.constructor = DraggableItem;
