import React from 'react';
import {mount} from 'enzyme';

import Footer from './Footer';

describe("Footer test", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Footer year={2018} 
            address= {  {city: 'BLR', state:'KA'} } />)
             
    })

  it("Footer default props test", () => {
      expect(wrapper.find('div').text()).toContain("MindTree")
      expect(wrapper.find('div').text()).toContain("2018")
  })

  it("Footer with props", () => {
    wrapper.setProps({
        company: 'React App'
    })
    wrapper.update() // render/function component
    expect(wrapper.find('div').text()).toContain("React App")
    expect(wrapper.find('div').text()).toContain("2018")
})
})