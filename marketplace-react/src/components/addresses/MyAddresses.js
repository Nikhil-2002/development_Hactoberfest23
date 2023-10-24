import React, { useState } from "react";
import AddAddressDialog from "../dialog/addAddressDialog/AddAddressDialog";
import ConfirmationDialog from "../dialog/confirmationDialog/ConfirmationDialog";
import { deleteAddress } from "../../services/addressService";
import { ToastContainer } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./address.css";
import { useSelector, useDispatch } from "react-redux";
import { updateEditAddress } from "../../reducers/actionCreators";

const MyAddresses = () => {
  const addresses = useSelector((state) => state.addressReducer.addresses);
  //const defaultAddress = useSelector((state) => state.addressReducer.defaultAddress);
  const editAddress = useSelector((state) => state.addressReducer.editAddress);
  const [openDialog, setOpenDialog] = useState(false);
  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);
  const [currentAddress, setCurrentAddress] = useState();
  const dispatch = useDispatch();

  return (
    <section className="stack">
      <div className="add-address-button-container">
        <h2>Saved Addresses</h2>
        <button
          className="button add-address-button"
          onClick={() => setOpenDialog(true)}
        >
          Add address
        </button>
      </div>
      {addresses.length === 0 ? (
        <div className="empty-container">
          {/* <ProductionQuantityLimitsIcon className="empty-icon" /> */}
          <p>You don&apos;t have any address saved. Please add to view here</p>
        </div>
      ) : (
        <div>
          {addresses.map((address, index) => {
            return (
              <div key={index} className="individual-address-container">
                <div>
                  <h4>{address.name}</h4>
                  <p>{address.flat}</p>
                  <p>{address.area}</p>
                  <p>
                    {address.city}, {address.state}
                  </p>
                  <p>Pincode: {address.pincode}</p>
                  <div className="address-ph">
                    <p>Phone Number: </p>
                    <h4>{address.phone}</h4>
                  </div>
                </div>
                <div>
                  <div className="address-actions-button-container">
                    <button
                      className="icon-button"
                      onClick={() => {
                        setCurrentAddress(address);
                        dispatch(updateEditAddress(true));
                        setOpenDialog(true);
                      }}
                    >
                      <EditIcon />
                    </button>
                    <button
                      className="icon-button"
                      onClick={() => setOpenConfirmationDialog(true)}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                  {address.default_address && <p>Default</p>}
                </div>
                {openConfirmationDialog && ( 
                  <ConfirmationDialog
                  setShowDialog={setOpenConfirmationDialog}
                  execute={() => deleteAddress(address)}
                  />
                )}
              </div>
            );
            
          })}
        </div>
      )}
      {openDialog && ( 
        <AddAddressDialog
          setOpenDialog={setOpenDialog}
          edit={editAddress}
          currentAddress={currentAddress}
        />
      )}
      
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        theme="dark"
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default MyAddresses;
