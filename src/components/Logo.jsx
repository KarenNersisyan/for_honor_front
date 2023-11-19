import PropTypes from 'prop-types';

// ----------------------------------------------------------------------

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

// ----------------------------------------------------------------------

export default function Logo({ className }) {
  return (
    <div className={'main-logo ' + className}>
      <p>Kreepton</p>
    </div>
  );
}
