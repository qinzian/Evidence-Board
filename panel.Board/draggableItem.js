function DraggableItem(t,id) {
  BoardObj.call(this, t,id);
  this.sf.draggable();
}
DraggableItem.prototype = Object.create(BoardObj.prototype);
DraggableItem.prototype.constructor = DraggableItem;

loadedScripts.push('draggableItem');
