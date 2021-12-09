class Model{
  constructor(id="", title="", text="", origin="", destination="", examDate=""){
    this.cardId = id;
    this.title = title;
    this.text = text;
    this.origin = origin;
    this.destination = destination;
    this.examDate = examDate;
  }
}

setTitle(title){
  this.title = title;
}
setText(text){
  this.text = text;
}
setOrigin(origin){
  this.origin = origin;
}
setDestination(destination){
  this.destination = destination;
}
setExamDate(examDate){
  this.examDate = examDate;
}
