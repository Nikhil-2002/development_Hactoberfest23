import { toast } from "react-toastify";
import { loadAddresses, updateDefaultAddress } from "../reducers/actionCreators";
import store from "../store";

const username = localStorage.getItem("username");
//const addresses = JSON.parse(localStorage.getItem("addresses"));
const dispatch = store.dispatch;

export const addAddress = (address) => {
  const addresses = JSON.parse(localStorage.getItem("addresses"));
  if (addresses.username.includes(address)) {
    toast.error("Address already exists");
    return
  }
  if(address.default_address || addresses.username.length === 0) setAddressAsDefault(address);
  addresses[username].push(address);
  localStorage.setItem("addresses", JSON.stringify(addresses));
  dispatch(loadAddresses(addresses));
  toast.info("Address has been added");
};

export const editAddress = (currentAddress, newAddress) => {
  const addresses = JSON.parse(localStorage.getItem("addresses"));
  const index = addresses[username].indexOf(currentAddress);
  if (newAddress.default_address) setAddressAsDefault(newAddress);
  addresses[username][index] = newAddress;
  localStorage.setItem("addresses", JSON.stringify(addresses));
  dispatch(loadAddresses(addresses));
  toast.info("Address has been updated");
};

export const deleteAddress = (address) => {
  const addresses = JSON.parse(localStorage.getItem("addresses"));
  const index = addresses[username].indexOf(address);
  addresses[username].splice(index, 1);
  localStorage.setItem("addresses", JSON.stringify(addresses));
  dispatch(loadAddresses(addresses));
  toast.info("Address has been deleted");
};

export const setAddressAsDefault = (address) => {
  const addresses = JSON.parse(localStorage.getItem("addresses"));
  addresses[username].map(item => item.default_address = false);
  localStorage.setItem("addresses", JSON.stringify(addresses));
  dispatch(loadAddresses(addresses));
  localStorage.setItem("default_address", JSON.stringify(address));
  dispatch(updateDefaultAddress(address));
}
 