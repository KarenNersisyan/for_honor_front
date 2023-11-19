import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

TextField.propTypes = {
  name: PropTypes.string,
  errorMessage: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  type: 'text',
  className: '',
};

// ----------------------------------------------------------------------

export default function TextField({
  name,
  errorMessage,
  value,
  label,
  type,
  className,
  placeholder,
  disabled,
  onClick,
  onChange,
}) {
  return (
    <div
      className={`text-field ${className} ${
        errorMessage !== '' ? 'invalid' : ''
      }`}
    >
      {label && <label className='field-label'>{label}</label>}
      <div className='field-wrapper'>
        <input
          type={type}
          name={name}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          onClick={onClick}
          onChange={onChange}
        />
      </div>
      {errorMessage && errorMessage !== '' && (
        <p className='error-message'>{errorMessage}</p>
      )}
    </div>
  );
}
