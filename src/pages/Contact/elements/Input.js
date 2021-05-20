import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Input = (props) => {
  const { name, id, required, label, type, pattern } = props;
  return (
    <Root>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        pattern={pattern}
        type={type}
        name={name}
        id={id}
        required={required}
        className="form-input"
      />
    </Root>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  pattern: PropTypes.string,
  required: PropTypes.bool,
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${vw(20)};
  input {
    border: 1px solid ${({ theme }) => theme.color.spaceSparkle};
    height: ${vw(40)};
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 ${vw(5)};
    margin-top: ${vw(5)};
  }
  @media ${media.tablet} {
    margin-bottom: ${vwTablet(20)};
    input {
      height: ${vwTablet(40)};
      padding: 0 ${vwTablet(5)};
      margin-top: ${vwTablet(5)};
    }
  }
  @media ${media.desktop} {
    margin-bottom: ${vwDesktop(20)};
    input {
      height: ${vwDesktop(50)};
      padding: 0 ${vwDesktop(5)};
      margin-top: ${vwDesktop(5)};
    }
  }
`;

export default Input;
