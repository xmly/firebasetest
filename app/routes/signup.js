import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user');
  },
  setupController: function (controller, model) {
    this._super(controller, model);
    controller.set('password', '');
    controller.set('password_re', '');
  },
  actions: {

    signup(newUser) {
      console.log('good')
      newUser.role = "user"
      newUser.save().then(() => this.transitionTo('libraries'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }

});
