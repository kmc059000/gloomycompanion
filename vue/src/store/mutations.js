import { flow, map, fromPairs } from 'lodash/fp';

import { DECKS } from '../domain/cards';

import { SCENARIO_DEFINITIONS } from '../domain/scenarios';

export default {
    initDecks(state) {
        state.decks = flow(
            map(x => ({
                ...x,
                isSelected: false,
                level: 1,
            })),
            map(x => [x.name, x]),
            fromPairs,
        )(DECKS);
    },

    applyScenario(state, scenario) {
        state.level = scenario.level;
        state.scenario = scenario.scenario;
        state.showMonsterModifierDeck = scenario.showMonsterModifierDeck;

        // select decks for scenario
        // todo handle boss definitions
        Object.values(state.decks).forEach((d) => {
            d.isSelected = false;
        });
        const scenarioDef = SCENARIO_DEFINITIONS[state.scenario - 1];
        scenarioDef.decks.forEach((d) => {
            const deck = state.decks[d.name];
            deck.isSelected = true;
        });
    },

    setupDecks(/* state, decks */) {
        // todo create decks that are selected with the level provided.
        // replace any decks that match the same type.
    },
};

