class Model{
  //CARDS
  class Cards{
    constructor(id="", title="", text="", origin="", destination="", examDate="", examTime=""){
      this.cardId = id;
      this.color = randomColorPicker();
      this.title = title;
      this.text = text;
      this.origin = origin;
      this.destination = destination;
      this.examDate = examDate;
      this.examTime = examTime;
    }
    setTitle(title){
      this.title = title;
    }
    randomColorPicker(){
      
    }
    getColor(){
      return this.color;
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
    setExamTime(examTime){
      this.examTime = examTime;
    }
  }
  //MODEL
  constructor(cards=[]){
      this.cards = cards;
  }
}
