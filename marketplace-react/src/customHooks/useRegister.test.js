import { act, renderHook } from "@testing-library/react";
import useRegister from "./useRegister";
import { when } from "jest-when";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

describe("Basic logic", () => {
  Enzyme.configure({ adapter: new Adapter() });
  const testUsername = "testUsername";
  const testName = "testName";
  const testEmail = "testemail@gmail.com";
  const testPhone = "9012345678";
  const testPassword = "testPassword";
  const testMode = "testMode";
  const registerValues = {
    username: testUsername,
    name: testName,
    email: testEmail,
    phone: testPhone,
    password: testPassword,
  };

  it("should initially not show error message", () => {
    const testOnRegister = jest.fn();
    const renderHookResult = renderHook(() => useRegister(testOnRegister));
    const result = renderHookResult.result;
    const { errorMessage } = result.current;

    expect(errorMessage).toBe(undefined);
  });

  it("should not show error message if logged in succesfully", async () => {
    const testOnRegister = jest.fn();
    when(testOnRegister)
      .calledWith(registerValues, testMode)
      .mockResolvedValue("Unused");
    const renderHookResult = renderHook(() => useRegister(testOnRegister));
    const result = renderHookResult.result;
    const { handleRegister } = result.current;

    await act(() => handleRegister(registerValues, testMode));

    const { errorMessage } = result.current;
    expect(testOnRegister).toBeCalledTimes(1);
    expect(testOnRegister).toHaveBeenCalledWith(registerValues, testMode);
    expect(errorMessage).toBe(undefined);
  });

  // it("should show error message for invalid credentials", async () => {
  //     const testOnRegister = jest.fn();
  //     const testError = "Username already exists, try a different one";
  //     when(testOnRegister).calledWith(registerValues, testMode).mockRejectedValue(testError);
  //     const renderHookResult = renderHook(() => useRegister(testOnRegister));
  //     const result = renderHookResult.result;
  //     const {handleRegister} = result.current;

  //     try {
  //         await act(() => handleRegister(registerValues, testMode));
  //     } catch (error) {
  //         console.log(error)
  //         const {errorMessage} = result.current;
  //         expect(testOnRegister).toBeCalledTimes(1);
  //         expect(testOnRegister).toHaveBeenCalledWith(registerValues, testMode);
  //         expect(errorMessage).toBe(undefined);
  //         expect(error).toBe(testError)
  //     }
  // });
});
