import { useState } from "react";
import PropTypes from "prop-types";
import {
  AddFormContainer,
  AddFormButtonContainer,
} from "./styledComponents/PropertyFormStyles";
import PropertyFormFields from './PropertyFormFields';
import { emptyPropertyFormData } from "../data/properties-data";

const AddPropertyForm = ({ show, setShowForm, setData }) => {
  const [formData, setFormData] = useState(emptyPropertyFormData);
  const updateFormData = (key, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(formData.name) {
      setData((prevState) => {
        return [
          ...prevState,
          formData
        ];
      })
      setFormData(emptyPropertyFormData);
    }
  }

  return (
    <AddFormContainer show={show}>
      {show && (
        <form>
          <PropertyFormFields isAddForm={true} updateFormData={updateFormData} formData={formData} />
          <AddFormButtonContainer>
            <span className="span-button" onClick={() => setShowForm(false)}>Cancel</span>
            <button onClick={submitHandler}>Add</button>
          </AddFormButtonContainer>
        </form>
      )}
    </AddFormContainer>
  );
};

AddPropertyForm.propTypes = {
  show: PropTypes.bool, 
  setShowForm: PropTypes.func, 
  setData: PropTypes.func,
}

export default AddPropertyForm;
