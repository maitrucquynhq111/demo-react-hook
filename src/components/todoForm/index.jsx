import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};
function TodoForm(props) {
  const { onSubmit } = props;
  const [value, setValue] = useState("");
  function onChangeInput(e) {
    let newValue = e.target.value;
    setValue(newValue);
  }
  function hanldleSubmit(e) {
    e.preventDefault();
    if (!onSubmit) return;
    let formValue = {
      title: value,
    };
    onSubmit(formValue);
    setValue("");
  }
  return (
    <form onSubmit={hanldleSubmit}>
      <input type="text" value={value} onChange={onChangeInput} />
    </form>
  );
}

export default TodoForm;
