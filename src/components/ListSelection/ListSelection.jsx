const ListSelection = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.htmlFor}>{props.labeltext}</label>
      <select {...props}>
        <option value="0">Select {props.listtype}...</option>
        {props.data.map((item) => (
          <option key={item._id} value={item.Name}>
            {item.Name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ListSelection;
