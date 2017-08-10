import Component from '@ember/component';
import computed from 'ember-computed';
import service from 'ember-service/inject';

export default Component.extend({
  store: service(),
  property: computed(function() {
    return 'myprop';
  })
});
