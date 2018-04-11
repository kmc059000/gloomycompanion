import { flow, map } from 'lodash/fp';

import { DECKS } from '../domain/cards';

export default {
    initDecks(state) {
        state.decks = flow(
            map(x => ({
                ...x,
                isSelected: false,
                level: 1,
            })),
        )(DECKS);
    },

    applyScenario(state, scenario) {
        state.level = scenario.level;
        state.scenario = scenario.scenario;
        state.showMonsterModifierDeck = scenario.showMonsterModifierDeck;
    },

    setupDecks(/* state, decks */) {
        // todo create decks that are selected with the level provided. replace any decks that match the same type.
    },
};

