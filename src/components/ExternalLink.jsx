import PropTypes from 'prop-types';

const ExternalLink = ({ to, children, ...rest }) => {
  const isMailto = to.startsWith('mailto:');
  
  return (
    <a
      href={to}
      target={isMailto ? '_self' : '_blank'}  // Use '_self' for mailto links, '_blank' for others
      rel={isMailto ? undefined : 'noopener noreferrer'}  // No rel for mailto links
      {...rest}
    >
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,  
  children: PropTypes.node.isRequired,
};

export default ExternalLink;
