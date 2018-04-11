import Vuex from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default function createStore() {
    const store = new Vuex.Store({
        state,
        getters,
        mutations,
        actions,
    });

    return store;
}
