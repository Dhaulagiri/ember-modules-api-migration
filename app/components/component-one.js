import Ember from 'ember';

const { computed, inject: { service } } = Ember;

export default Ember.Component.extend({
  store: service(),
  property: computed(function() {
    return 'myprop';
  })
});
