import PropTypes from 'prop-types';
import ReactCodeInput from 'react-code-input';

// ----------------------------------------------------------------------

CodeField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  length: PropTypes.number,
};

CodeField.defaultProps = {
  type: 'text',
  className: '',
  length: 5,
};

// ----------------------------------------------------------------------

export default function CodeField({ name, type, length, className, onChange }) {
  return (
    <div className={`code-field ${className}`}>
      <ReactCodeInput
        type={type}
        name={name}
        fields={length}
        onChange={onChange}
      />
    </div>
  );
}
