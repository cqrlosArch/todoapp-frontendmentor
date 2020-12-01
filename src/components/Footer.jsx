import styled from 'styled-components';

const FooterStyled = styled.div`
  color: ${({ theme }) => theme.dragDrop};
  margin: 0 2rem;
  margin-top: 2rem;
  text-align: center;
  font-size: 18px;
  .author {
    font-size: 14px;
    color: ${({ theme }) => theme.footer};
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <p>Drag and drop to reorder list</p>
      <p className="author">Carlos Díaz @frontendmentor.io</p>
    </FooterStyled>
  );
};

export default Footer;
