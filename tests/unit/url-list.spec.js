import UrlList from "@/components/UrlList.vue"
import { shallowMount } from "@vue/test-utils"
describe("UrlList.vue", ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper=shallowMount(UrlList, {})
    })
    it("renders", ()=>{
        expect(wrapper.exists()).toBe(true)
    })
    it("does h3 exist", ()=>{
        expect(wrapper.find("h3").text()).toBe("Url List")
    })
})