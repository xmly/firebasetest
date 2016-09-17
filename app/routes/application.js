import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },
  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", { provider: 'password',
        email: '123@gmail.com',
        password: '123456'}).then(function(data) {
        console.log(data.currentUser);
      });
    },
    signOut: function() {
      this.get("session").close();
    }
  }

});
