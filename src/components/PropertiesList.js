import { useState } from "react";
import PropTypes from 'prop-types';
import { PropertyList, ProperyListItem, PropertyLabelCol, HiddenCol} from './styledComponents/PropertyListStyles';
import TrashIcon from "../svg/trash.svg";
import PlusIcon from "../svg/plus.svg";
import CloseIcon from "../svg/action-close.svg";
import VisibilityIconSVG from "../svg/visibility-visible.svg";
import VisibilityHiddenIconSVG from "../svg/visibility-hidden.svg";
import createListItemOpenObj from "../utils/createListItemOpenObj";
import PropertyForm from "./PropertyForm";

const PropertiesList = ({ data, setData }) => {
  const initialListItemOpenObj = createListItemOpenObj(data);
  const [listItemOpen, setListItemOpen] = useState(initialListItemOpenObj);
  const listKey = 'listItem';

  const toggleListItemOpen = (key) => {
    setListItemOpen((prevState) => {
      return {
        ...prevState,
        [key]: !prevState[key],
      };
    });
  };

  const toggleVisibility = (idx, value) => {
    setData((prevState) => {
      const tempState = prevState.slice();
      return [
        ...prevState.slice(0, idx),
        { ...tempState[idx], visibility: value },
        ...prevState.slice(idx + 1),
      ];
    });
  }
  
  const deleteListItem = (idx) => {
    setData((prevState) => {
      const tempArr = prevState.slice();
      tempArr.splice(idx, 1);
      const newListItemObj = createListItemOpenObj(tempArr);
      setListItemOpen(newListItemObj)
      return tempArr;
    });
  }
  return (
    <PropertyList>
      {data.map((listItem, idx) => (
        <ProperyListItem key={`${listKey}-${idx}`} visibility={listItem.visibility ? 1 : 0}>
          <PropertyLabelCol>
            <span>{listItem.name}</span>
            <span className="span-button" onClick={() => toggleVisibility(idx, !listItem.visibility)}>
              <img
                src={
                  listItem.visibility
                    ? VisibilityIconSVG
                    : VisibilityHiddenIconSVG
                }
                alt={listItem.visibility ? "visibility icon" : "visibility hidden icon"}
              />
            </span>
            {
              listItemOpen[`listItem-${idx}`] && (
                <span className="span-button" onClick={() => deleteListItem(idx)}>
                  <img src={TrashIcon} alt="trash icon" />
                </span>
              )
            }
          </PropertyLabelCol>
          <HiddenCol>
            {
              listItemOpen[`listItem-${idx}`] && (
                <PropertyForm formData={listItem} setFormData={setData} idx={idx}/>
              )
            }
          </HiddenCol>
          <div>
            <span className="span-button plus-button" onClick={() => toggleListItemOpen(`${listKey}-${idx}`)}>
              <img src={listItemOpen[`${listKey}-${idx}`] ? CloseIcon : PlusIcon} alt="plus icon" />
            </span>
          </div>
        </ProperyListItem>
      ))}
    </PropertyList>
  );
};

PropertiesList.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func,
}

export default PropertiesList;
