export default {
    init({ commit }) {
        commit('initDecks');
    },
    applyScenario: ({ commit }, value) => commit('applyScenario', value),
    setupDecks: ({ commit }, value) => commit('setupDecks', value),
};
