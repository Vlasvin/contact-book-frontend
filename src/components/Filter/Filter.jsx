import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

import { FilterLabel, FilterInput } from "components/Filter/styled";

export const Filter = () => {
  const dispatch = useDispatch();
  const filterName = useSelector((state) => state.filter.value);
  const changeFilter = (e) => {
    dispatch(setFilter(e.currentTarget.value.trim()));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        type="text"
        value={filterName}
        onChange={changeFilter}
      ></FilterInput>
    </FilterLabel>
  );
};
