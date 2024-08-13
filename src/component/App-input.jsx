const AppInput = ({ type, name, placeholder, values, onChange }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        values={values}
        onChange={onChange}
      />
    </div>
  );
};
export default AppInput;
