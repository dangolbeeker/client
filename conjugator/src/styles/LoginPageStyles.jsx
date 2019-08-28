import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConjugatorIo = styled.h1`
  // *HTML Class* .conjugator-io

  height: 49px;
  width: 214px;
  color: #fff2b3;
  font-family: Nunito;
  font-size: 36px;
  line-height: 49px;
`;

const WelcomeBack = styled.h2`
  // *HTML Class* .welcome-back

  height: 41px;
  width: 207px;
  color: #073069;
  font-family: Nunito;
  font-size: 30px;
  line-height: 41px;
`;

const Email = styled.p`
  // *HTML Class* .email

  height: 22px;
  width: 39px;
  color: #073069;
  font-family: Nunito;
  font-size: 16px;
  line-height: 22px;
  padding-right: 326px;
  margin-bottom: 8px;
`;

const Password = styled.p`
  // *HTML Class* .password

  height: 22px;
  width: 71px;
  color: #073069;
  font-family: Nunito;
  font-size: 16px;
  line-height: 22px;
  padding-right: 290px;
  margin-bottom: 8px;
`;

const Rectangle = styled.input`
  // *HTML Class* .rectangle

  height: 40px;
  width: 360px;
  background-color: #ffffff;
  border: none;
  font-size: larger;
  padding-left: 5px;
`;

const Button = styled.button`
  // *HTML Class* .rectangle
  height: 45px;
  width: 220px;
  border-radius: 6px;
  background-color: #4890f3;
`;

const LetsGo = styled.span`
  // *HTML Class* .let-s-go

  height: 24px;
  width: 70px;
  color: #fff2b3;
  font-family: Nunito;
  font-size: 18px;
  line-height: 24px;
`;

const Path1 = styled.div`
  // *HTML Class* .path-copy-2

  height: 189px;
  width: 433px;
  background-color: #0a4699;

  content: "";
  //   position: absolute;
  //   left: 0;
  //   bottom: 0;
  //   right: 0;
  background-repeat: repeat;
  height: 10px;
  background-size: 20px 20px;
  background-image: radial-gradient(
    circle at 10px -5px,
    transparent 12px,
    maroon 13px
  );
`;

const Path2 = styled.div`
  // *HTML Class* .path-copy-3

  height: 238px;
  width: 433px;
  opacity: 0.75;
  background-color: #0a4699;
`;

const Path3 = styled.div`
  // *HTML Class* .path-copy-4

  height: 189px;
  width: 433px;
  transform: rotate(-180deg);
  background-color: #0a4699;
`;

const Path4 = styled.div`
  // *HTML Class* .path-copy-5

  height: 238px;
  width: 433px;
  opacity: 0.75;
  transform: rotate(-180deg);
  background-color: #0a4699;
`;

export {
  ConjugatorIo,
  WelcomeBack,
  Email,
  Password,
  Rectangle,
  Button,
  LetsGo,
  Path1,
  Path2,
  Path3,
  Path4,
  Form
};
