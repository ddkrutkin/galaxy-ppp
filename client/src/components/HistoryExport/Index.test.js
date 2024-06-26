import { shallowMount } from "@vue/test-utils";
import { getLocalVue } from "tests/jest/helpers";

import { mockFetcher } from "@/schema/__mocks__";

import Index from "./Index.vue";

jest.mock("@/schema");

const localVue = getLocalVue();

describe("Index.vue", () => {
    beforeEach(() => {
        mockFetcher
            .path("/api/remote_files/plugins")
            .method("get")
            .mock({ data: [{ id: "foo", writable: false }] });
    });

    it("should render tabs", () => {
        // just make sure the component renders to catch obvious big errors
        const wrapper = shallowMount(Index, {
            propsData: {
                historyId: "test_id",
            },
            localVue,
        });
        expect(wrapper.exists("b-tabs-stub")).toBeTruthy();
    });
});
