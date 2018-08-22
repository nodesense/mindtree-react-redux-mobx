import React from "react";

import {mount} from "enzyme";
import About from "./About";

describe("About component Suite", ()=> {
    
    it("about default test", ()=> {
        let wrapper = mount(<About  />);
        expect(wrapper.find("ul").length).toBe(1);
        expect(wrapper.find("li").length).toBe(2);
    })

    it("showHide test ", () => {
        let wrapper = mount(<About  />);
        // return about comp instance
        let aboutInst = wrapper.instance();
        expect(aboutInst.state.showList).toBe(true)
        aboutInst.showHide();

        wrapper.update(); // call the re-render method, MUST

        expect(aboutInst.state.showList).toBe(false)
        expect(wrapper.find("ul").length).toBe(0);
        expect(wrapper.find("li").length).toBe(0);
    })

    it("updown test", () => {
        let wrapper = mount(<About  />);
        // return about comp instance
        let aboutInst = wrapper.instance();

        //wrapper.find("#up").prop('onClick')();
        // or
        //wrapper.find("#up").props().onClick();

        // or
        wrapper.find("#up").simulate('click'); // the only simulate click I want

        wrapper.update(); //re-render
        const state = wrapper.state()
        expect(state.pageLikes).toBe(1)
        expect(wrapper.find("span").text()).toBe("1");
    })

})