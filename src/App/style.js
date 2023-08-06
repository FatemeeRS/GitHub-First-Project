import styled from "styled-components";
import PoppinsBlack from './../acsios/font/Poppins/Poppins-Black.ttf';
import PoppinsLight from './../acsios/font/Poppins/Poppins-Light.ttf'

export const StyledApp = styled.div`
  height: 100vh;
  @font-face {
    font-family: 'Poppins' ;
    src: local('Poppins Black'), local('Poppins Light'),
    url(${PoppinsBlack}) format('ttf'),
    url(${PoppinsLight}) format('ttf');
    font-weight: 500;
    font-style: normal;
  }
  font-family: 'Poppins Light' ;
`;
