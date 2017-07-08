function Note(id) {
  DraggableItem.call(this, "note",id);

  this.title = id.toString(); // all title has default value

  this.setTitle = function(s){
    nh.updateObjTitle(this.id,s); // args: (id, newTitle)

    this.title = s;
    this.sf.html(this.title);
  }

  this.getTitle = function(){
    return this.title;
  }
}
Note.prototype = Object.create(DraggableItem.prototype);
Note.prototype.constructor = Note;
