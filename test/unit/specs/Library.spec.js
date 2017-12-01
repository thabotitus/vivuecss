import Vue from 'vue';
import Library from '@/containers/Library';

describe('Library.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Library);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.vv-card .vv-card__header').textContent)
    .to.equal('Welcome to Your Vue.js App');
  });
});
