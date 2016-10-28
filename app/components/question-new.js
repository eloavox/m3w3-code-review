import Ember from 'ember';

export default Ember.Component.extend({
  inCreate: false,
  actions:{
    toggleCreate(){
      if(this.inCreate){
        this.set("inCreate", false);
      } else {
        this.set("inCreate", true);
      }
    },
    createQuestion(){
      if(this.get('user') === undefined || this.get('question') === undefined || this.get('further') === undefined){
        $('#error').transition('scale');
      }else {
        var params = {
          user: this.get('user'),
          question: this.get('question'),
          further: this.get('further'),
          date: "1/2/3456"
        };
        this.set("inCreate", false);
        this.sendAction("createQuestion", params);
      }
    },
    toggleError(){
      $('#error').transition('scale');
    }
  }
});
