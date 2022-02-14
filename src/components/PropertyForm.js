import PropTypes from 'prop-types';
import PropertyFormFields from './PropertyFormFields';

const PropertyForm = ({ formData, setFormData, idx }) => {
  const updateFormData = (key, value) => {
    setFormData((prevState) => {
      const tempState = prevState.slice();
      return [
        ...prevState.slice(0, idx),
        { ...tempState[idx], [key]: value },
        ...prevState.slice(idx + 1),
      ];
    });
  };
  return (
    <form>
      <PropertyFormFields formData={formData} updateFormData={updateFormData} />
    </form>
  );
};

PropertyForm.propTypes = {
  formData: PropTypes.object, 
  setFormDat: PropTypes.func, 
  idx: PropTypes.number,
}

export default PropertyForm;
