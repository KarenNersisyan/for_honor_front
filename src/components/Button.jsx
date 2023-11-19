import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

Button.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outlined', 'text', 'link']),
  type: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['large', 'small']),
  radius: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'text',
  color: 'white',
  type: 'button',
  className: '',
  size: 'large',
  radius: true,
  fullWidth: false,
};

// ----------------------------------------------------------------------

export default function Button({
  variant,
  className,
  color,
  icon,
  disabled,
  onClick,
  children,
  size,
  type,
  label,
  radius,
  fullWidth,
}) {
  return (
    <button
      onClick={onClick}
      className={`btn variant-${variant} size-${size} color-${color} ${className} ${
        radius && 'radius'
      } ${fullWidth && 'width-full'}`}
      type={type}
      disabled={disabled}
    >
      {icon && <i className={'icon-' + icon}></i>}
      {children ? children : label}
    </button>
  );
}
