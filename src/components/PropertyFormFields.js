import FormToggle from "./FormToggle";
import { FormRow } from "./styledComponents/PropertyFormStyles";
import PropTypes from 'prop-types';

const PropertyFormFields = ({ isAddForm = false, updateFormData, formData }) => {
  const propertTypeOptions = ["one of", "node", "boolean"];
  const propertyControlOptions = ["select", "textarea"];
  return (
    <>
      <FormRow>
        <label> Property Name </label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => updateFormData("name", e.target.value)}
        />
        {isAddForm && (<small>(name of the property given in code)</small>)}
      </FormRow>
      <FormRow>
        <label> Display name </label>
        <input
          name="displayName"
          type="text"
          value={formData.displayName}
          onChange={(e) => updateFormData("displayName", e.target.value)}
        />
      </FormRow>
      <FormRow isBlock>
        <label className="textarea-label"> Description </label>
        <textarea
          name="description"
          type="text"
          value={formData.description}
          onChange={(e) => updateFormData("description", e.target.value)}
        />
      </FormRow>
      <FormRow>
        <label> Property type</label>
        <select
          onChange={(e) => updateFormData("propertyType", e.target.value)}
          value={formData.propertyType}
        >
          {propertTypeOptions.map((type, idx) => (
            <option key={`property-type-${idx}`} value={type}>{type}</option>
          ))}
        </select>
      </FormRow>
      {(formData.propertyType === "one of" ||
        formData.propertyType === "node") && (
        <FormRow>
          <label>Property Control</label>
          <select
            onChange={(e) => updateFormData("propertyControl", e.target.value)}
            value={formData.propertyControl}
          >
            {propertyControlOptions.map((control, idx) => (
              <option
                key={`property-control-${idx}`}
                value={control}
              >
                {control}
              </option>
            ))}
          </select>
          {formData.propertyControl === "textarea" && (
            <input
              name="rows"
              className="small-input"
              type="text"
              placeholder="rows"
              onChange={(e) => updateFormData("rows", e.target.value)}
              value={formData.rows}
            />
          )}
          {isAddForm && (<small>(type of control displayed in editor's properties panel.<a href="/">Learn more</a> about control type)</small>)}
        </FormRow>
      )}
      {formData.propertyControl === "select" &&
        formData.propertyType === "one of" && (
          <>
            <FormRow isBlock>
              <label className="textarea-label"> Options </label>
              <textarea
                name="options"
                onChange={(e) =>
                  updateFormData("options", e.target.value.split(","))
                }
                value={formData.options.join(",")}
              />
              <small>(list options separated by commas)</small>
            </FormRow>
          </>
        )}
      <FormRow isBlock={formData.propertyControl === "textarea"}>
        <label
          className={
            formData.propertyControl === "textarea" ? "textarea-label" : ""
          }
        >
          Default Value
        </label>
        {formData.options.length > 0 &&
          formData.propertyType === "one of" &&
          formData.propertyControl === "select" && (
            <select
              onChange={(e) => updateFormData("defaultValue", e.target.value)}
              value={formData.defaultValue}
            >
              {formData.options.map((option, idx) => (
                <option
                  key={`default-value-${idx}`}
                  value={option}
                >
                  {option}
                </option>
              ))}
            </select>
          )}
        {formData.propertyControl === "textarea" &&
          formData.propertyType === "node" && (
            <textarea
              name="defaultValue"
              onChange={(e) => updateFormData("defaultValue", e.target.value)}
              value={formData.defaultValue}
            />
          )}
        {formData.propertyType === "boolean" && (
          <FormToggle
            isChecked={formData.isChecked}
            changeHandler={updateFormData}
          />
        )}
      </FormRow>
    </>
  );
};

PropertyFormFields.propTypes = {
  isAddForm : PropTypes.bool, 
  updateFormData: PropTypes.func, 
  formData: PropTypes.object
}

export default PropertyFormFields;
