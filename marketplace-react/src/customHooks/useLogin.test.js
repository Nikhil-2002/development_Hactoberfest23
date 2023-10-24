import { act, renderHook } from "@testing-library/react";
import useLogin from "./useLogin";
import { when } from "jest-when";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

describe("Basic logic", () => {
  Enzyme.configure({ adapter: new Adapter() });
  const testUsername = "testUsername";
  const testPassword = "testPassword";
  const testMode = "testMode";
  const loginValues = {
    username: testUsername,
    password: testPassword,
  };

  it("should initially not show error message", () => {
    const testOnLogin = jest.fn();
    const renderHookResult = renderHook(() => useLogin(testOnLogin));
    const result = renderHookResult.result;
    const { errorMessage } = result.current;

    expect(errorMessage).toBe(undefined);
  });

  it("should not show error message if logged in succesfully", async () => {
    const testOnLogin = jest.fn();
    when(testOnLogin)
      .calledWith(testUsername, testPassword, testMode)
      .mockResolvedValue("Unused");
    const renderHookResult = renderHook(() => useLogin(testOnLogin));
    const result = renderHookResult.result;
    const { handleLogin } = result.current;

    await act(() => handleLogin(loginValues, testMode));

    const { errorMessage } = result.current;
    expect(testOnLogin).toBeCalledTimes(1);
    expect(testOnLogin).toHaveBeenCalledWith(
      testUsername,
      testPassword,
      testMode
    );
    expect(errorMessage).toBe(undefined);
  });

  // it("should show error message for invalid credentials", async () => {
  //     const testOnLogin = jest.fn();
  //     const testError = "Please enter valid credentials";
  //     when(testOnLogin).calledWith(testUsername, testPassword, testMode).mockRejectedValue(testError);
  //     const renderHookResult = renderHook(() => useLogin(testOnLogin));
  //     const result = renderHookResult.result;
  //     const {handleLogin} = result.current;

  //     try {
  //         await act(() => handleLogin(loginValues, testMode));
  //     } catch (e) {
  //         console.log(e)
  //         expect(e).toBe(testError)
  //     }

  //     const {errorMessage} = result.current;
  //     expect(testOnLogin).toBeCalledTimes(1);
  //     expect(testOnLogin).toHaveBeenCalledWith(testUsername, testPassword, testMode);
  //     expect(errorMessage).toBe(undefined);
  // });
});
