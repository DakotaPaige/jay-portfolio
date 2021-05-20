import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Input from '../elements/Input';
import TextArea from '../elements/TextArea';

import { vw, vwTablet, vwDesktop } from 'src/styles/utils';
import media from 'src/styles/media';

const Form = () => {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const $form = useRef();

  // TODO: remove cors-anywhere proxy when live, only for staging

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData($form.current);

    await fetch(
      'https://bam-cors-anywhere.herokuapp.com/https://jaypegsphoto.ca/scripts/mailer.php',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then(() => {
        setIsLoading(false);
        setHasError(false);
        setHasSubmitted(true);
      })
      .catch(() => {
        setIsLoading(false);
        setHasError(true);
      });
  };

  return (
    <Root>
      <h1>Send me a message</h1>
      <Wrapper>
        <form
          action="https://jaypegsphoto.ca/scripts/mailer.php"
          method="post"
          onSubmit={(e) => handleSubmit(e)}
          ref={$form}
          style={{
            opacity: hasSubmitted ? 0 : 1,
            pointerEvents: hasSubmitted ? 'none' : 'all',
          }}
        >
          <input
            type="hidden"
            name="retURL"
            id="retURL"
            value={`${window.location.origin}`}
          />
          <Input name="email" id="email" required type="email" label="Email" />
          <Input name="name" id="name" required type="text" label="Name" />
          <TextArea
            type="text"
            name="message"
            id="message"
            rows="4"
            label="Message"
          />
          <Container>
            <Button type="submit" className="button">
              Submit
            </Button>
            <Loading
              src={require('src/assets/images/icons/ajax-loader.gif')}
              alt="Loading"
              style={{ opacity: isLoading ? 1 : 0 }}
            />
            <Error style={{ opacity: hasError ? 1 : 0 }}>
              There appears to be an error with the submission, please try
              again.
            </Error>
          </Container>
        </form>
        <Submit hasSubmitted={hasSubmitted}>
          <h3>Thank you for your submission!</h3>
        </Submit>
      </Wrapper>
    </Root>
  );
};

const Root = styled.div`
  h1 {
    margin-bottom: ${vw(20)};
  }
  @media ${media.tablet} {
    width: 60%;
    h1 {
      margin-bottom: ${vwTablet(20)};
    }
  }
  @media ${media.desktop} {
    width: 50%;
    h1 {
      margin-bottom: ${vwDesktop(40)};
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  position: relative;
  @media ${media.tablet} {
    width: fit-content;
  }
`;

const Submit = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.4s ease;
  opacity: ${(props) => (props.hasSubmitted ? 1 : 0)};
  pointer-events: ${(props) => (props.hasSubmitted ? 'all' : 'none')};
`;

const Button = styled.button`
  width: ${vw(150)};
  height: ${vw(40)};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.spaceSparkle};
  color: white;
  @media ${media.tablet} {
    width: ${vwTablet(150)};
    height: ${vwTablet(40)};
    margin: 0;
  }
  @media ${media.desktop} {
    width: ${vwDesktop(150)};
    height: ${vwDesktop(50)};
    margin: 0;
    cursor: pointer;
    transition: 0.4s ease;
  }
`;

const Error = styled.p`
  position: absolute;
  left: 50%;
  top: ${`calc(100% + ${vw(10)})`};
  transform: translateX(-50%);
  width: ${vw(200)};
  text-align: center;
  transition: 0.3s ease;
  @media ${media.tablet} {
    top: ${`calc(100% + ${vwTablet(10)})`};
    transform: none;
    left: 0;
    width: ${vwTablet(450)};
    text-align: left;
  }
  @media ${media.desktop} {
    top: ${`calc(100% + ${vwDesktop(10)})`};
    width: ${vwDesktop(480)};
  }
`;

const Loading = styled.img`
  width: ${vw(25)};
  display: block;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.4s ease;
  @media ${media.tablet} {
    width: ${vwTablet(25)};
    right: auto;
    left: ${`calc(100% + ${vwTablet(15)})`};
  }
  @media ${media.desktop} {
    width: ${vwDesktop(25)};
    left: ${`calc(100% + ${vwDesktop(15)})`};
  }
`;

export default Form;
