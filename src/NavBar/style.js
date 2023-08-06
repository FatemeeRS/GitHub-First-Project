import styled from "styled-components";

export const StyledNavBar = styled.div`
  background: var(--pure-white);
  width: 80%;
  height: 74px;
  margin: auto;
  border-radius: 24px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    border-left: 2px solid #3f3e4f;
    height: 70%;
  }
  .login {
    justify-content: space-between;
    .btn{
      
    }
  }
  .titlepages {
    width: 50%;
    display: flex;
    justify-content: space-evenly;
  }
  .btn{
    color: #3f3e4f!important;
  }
  
`;
