import axios from "axios";
import { prependPath } from "utils/redirect";
import Vue from "vue";

export const state = {
    collectionAttributes: {},
};

const getters = {
    getCollectionAttributes: (state) => (collectionId) => {
        return state.collectionAttributes[collectionId] || null;
    },
};

const actions = {
    fetchCollectionAttributes: async ({ commit }, collectionId) => {
        const { data } = await axios.get(prependPath("api/dataset_collections/" + collectionId + "/attributes"));
        commit("saveCollectionAttributes", { collectionId, collectionAttributes: data });
    },
};

const mutations = {
    saveCollectionAttributes: (state, { collectionId, collectionAttributes }) => {
        Vue.set(state.collectionAttributes, collectionId, collectionAttributes);
    },
};

export const collectionAttributesStore = {
    state,
    getters,
    actions,
    mutations,
};
