import styled from 'styled-components';

import { useConfiguration } from '../contexts/configuration';

const Img = styled.img`
  height: ${72 / 16}rem;
`;

const Logo = () => {
  const {
    logos: { auth },
  } = useConfiguration();

  return <Img src={auth?.custom?.url ?? auth.default} aria-hidden alt="" />;
};

export { Logo };
