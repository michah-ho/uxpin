import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PropertyHeader from './styledComponents/PropertyHeader';
import AddPropertyForm from './AddPropertyForm';
import propertiesData from '../data/properties-data';
import PropertiesList from './PropertiesList';

const Properties = ({ isDiscard, setIsDiscard, isSaved, setIsSaved }) => {
  const [showForm, setShowForm] = useState(false);
  const initialData = localStorage.getItem('listData') ? JSON.parse(localStorage.getItem('listData')) : propertiesData;
  const [ data, setData ] = useState(initialData);

  useEffect(() => {
    if(isDiscard) {
      setData(initialData); // this is the simplest way to reset everything
      setIsDiscard(false);
    }
  }, [isDiscard, setData, setIsDiscard, initialData]);

  useEffect(() => {
    if(isSaved) {
      localStorage.setItem('listData', JSON.stringify(data));
      setIsSaved(false);
    }
  }, [isSaved, setIsSaved, data])

  return(
    <>
      <PropertyHeader>
        <h3>Properties</h3>
        <span className="span-button" onClick={() => setShowForm(true)}>+ Add new property</span>
      </PropertyHeader>
      <AddPropertyForm show={showForm} setShowForm={setShowForm} setData={setData} />
      <PropertiesList data={data} setData={setData}/>
    </>
  )
}

Properties.propTypes = {
  isDiscard: PropTypes.bool, 
  setIsDiscard: PropTypes.func,
  isSaved: PropTypes.bool, 
  setIsSaved: PropTypes.func,
}

export default Properties;