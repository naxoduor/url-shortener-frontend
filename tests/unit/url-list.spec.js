import UrlList from "@/components/UrlList.vue"
import { shallowMount } from "@vue/test-utils"
describe("UrlList.vue", ()=>{
    let url_list=[{"clicks":0,"_id":"5f0ec9076ed34b221f5bd2da","full":"http://www.powerafrica.co.ke/","short":"XyB8EmA0L","__v":0},{"clicks":0,"_id":"5f0f3fa2fd447811b0068366","full":"https://vuejs.org","short":"mQz7lXXFd","__v":0},{"clicks":0,"_id":"5f0f4305f649df1388a2880b","full":"https://www.hackerrank.com/","short":"wyGbvTp68","__v":0},{"clicks":0,"_id":"5f11703c1d17730e4eb82f4c","full":"http://www.twitter.com","short":"ogH-ZPgSA","__v":0}]
    let wrapper;

    beforeEach(()=>{
        wrapper=shallowMount(UrlList, {
            propsData: { url_list }
        })
    })
    
    it("renders", ()=>{
        expect(wrapper.exists()).toBe(true)
    })
    it("does h3 exist", ()=>{
        expect(wrapper.find("h3").text()).toBe("Url List")
    })
    it("compare number of urls", ()=>{
        expect(wrapper.findAll("td.short_url").length).toBe(url_list.length)
    })
})