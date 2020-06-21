import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

Search.propTypes = {
  onInputChange: PropTypes.func,
};

Search.defaultProps = {
  onInputChange: null,
};

function Search(props) {
  const { onInputChange } = props;
  const [textSearch, setTextSearch] = useState("");
  const timeoutRef = useRef(null);

  function handleChangeTextSearch(e) {
    const value = e.target.value;
    setTextSearch(value);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (!onInputChange) return;
    timeoutRef.current = setTimeout(() => {
      const formValues = {
        textSearch: value,
      };
      onInputChange(formValues);
    }, 500);
  }
  return (
    <form>
      <input type="text" value={textSearch} onChange={handleChangeTextSearch} />
    </form>
  );
}

export default Search;
