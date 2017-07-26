import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable */
export default new Vuex.Store({
  state: {
    equation: [],
    output: '0',
    clearNext: false,
  },
  getters: {
    getEquation(state) {
      return state.equation.join(' ');
    },
    getOutput: state => state.output,
  },
  mutations: {
    setEquation(state, n) {
      state.equation.push(parseFloat(state.output));
      state.equation.push(n);
      state.output = '0';
      state.clearNext = true;
    },
    setOutput(state, n) {
      if (state.output == '0' || state.clearNext) {
        state.output = n;
        state.clearNext = false;
      } else if (state.output.length < 9) {
        state.output = state.output.concat(n);
      }
    },
    clear(state) {
      state.output = '0';
      state.equation = [];
    },
    compute(state) {
      state.equation.push(parseFloat(state.output));
      state.output = Math.random() * 10;
      state.clearNext = true;
    },
  },
});
