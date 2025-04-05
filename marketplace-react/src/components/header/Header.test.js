import React from "react";
import Header from "./Header";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";

describe("Basic Rendering", () => {
  Enzyme.configure({ adapter: new Adapter() });
  const testOnLogout = jest.fn();

  it("should not render inner icons section if not authenticated", () => {
    const header = shallow(
      <Router>
        <Header isAuthenticated={false} onLogout={testOnLogout} />
      </Router>
    );

    expect(header.find(".inner-icons-section").exists()).toBe(false);
  });

  // it("should render inner icons section if authenticated", () => {
  //     const header = shallow(<Router><Header isAuthenticated={true} onLogout={testOnLogout}/></Router>);
  //     console.log(header);

  //     expect(
  //         header.find({id: "ankur"}).exists()
  //     ).toBeTruthy();
  // });
});
