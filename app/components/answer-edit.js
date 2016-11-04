import Ember from 'ember';

export default Ember.Component.extend({
  inEdit: false,
  favoriteAnswers: Ember.inject.service(),
  actions:{
    toggleEdit(){
      if(this.inEdit){
        this.set("inEdit", false);
      }else {
        this.set("inEdit", true);
      }
    },
    updateAnswer(answer){
      if($("#answer").val() === ""){
        if(!($("#error").hasClass("visible"))){
          if(!($("#error").hasClass("visible"))){
            $('#error').transition('scale');
          }
        }
      }else {
        var params = {
          answer: $("#answer").val()
        };

        this.set("inEdit", false);

        this.sendAction("updateAnswer", answer, params);
      }
    },
    deleteAnswer(answer){
      this.sendAction("deleteAnswer", answer);
    },
    toggleError(){
      $('#error').transition('scale');
    },
    vote(direction, answer){
      var votes;

      //Protection for older answer models without votes.
      if(this.get("answer.votes")){
        votes = this.get("answer.votes");
      } else {
        votes = 0;
      }

      if(direction === "up"){
        votes++;
      }else{
        votes--;
      }

      var params = {
        votes: votes
      };
      this.sendAction("updateAnswer", answer, params);

    },
    addToFaves(answer){
      console.log($('#' + answer.get("id")).rating('get rating'));
      this.get('favoriteAnswers').adjust(answer);
    }
  }
});
