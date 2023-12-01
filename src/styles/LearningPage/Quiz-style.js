import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
  margin-top: 2rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width:100%;
  }
`;

export const QuizWrapper = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bolder;
  color: #006fc0;
`;
export const SubmitButton = styled.button`
  width: 179px;
  height: 52px;
  border: none;
  line-height: 18px;
  letter-spacing: 0.02em;
  font-size: 19px;
  font-weight: 900;
  margin-left: 500px;
  margin-right: 12px;
  background-color: rgba(244, 128, 35, 1);
  color: #fff;
  border-radius: 15px;
`;
export const CustomNextButton = styled(SubmitButton)`
  width: 10rem;
  border: none;
  letter-spacing: 0.02em;
  font-size: 1rem;
  font-weight: 900;
  margin: 0 2rem;
  color: #fff;
  border-radius: 15px;
  background-color: #006fc0;
  box-shadow: 5px 5px 5px 0px rgb(0 0 0 / 25%);
`;

export const Label = styled.div`
  font-weight: bolder;
  font-size: 2rem;
  color: #006fc0;
  text-shadow: -2px -1px 5px rgba(108, 99, 255, 0.47);
`;

export const LabelScore = styled.div`
  font-weight: bolder;
  font-size: 25px;
  color: #6066d0;
  margin-bottom: 40px;
  color: rgba(96, 102, 208, 1);
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`;

export const Quiz = styled.div`
  margin-left: 1rem;
  margin-bottom: 1rem;
  color: black;
  font-size: 1.5rem;
  text-shadow: 0 0 black;
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  margin-top: 4rem;
  gap: 3px;
  flex-direction: column;
  width: 7rem;
  font-size: 1.5rem;
  height: 3rem;
`;

export const StyledBtn = styled.button`
  display: flex;
  margin: 1rem;
  font-size: 1.6rem;
  padding: 0.5rem;
  border-radius: 2rem;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.23);
  flex-direction: column;
  border-color: lightgray;
  background-color: white;
  color: black;
  transition: background-color 0.3s,color 0.3s;
  align-items: center;

  &:hover,
  &:focus {
    background-color: orange;
    color: white; 
  }
`;

export const StyledInput = styled.input`
  font-size: 30px;
  font-weight: 700;
  width: 20px;
  height: 20px;
`;

export const TimerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
`;

export const MaskContainer = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: #eee;
  margin-bottom: 1rem;
  box-shadow: 1px 1px 7px 2px darkgray;
  }
`;

export const Mask = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(252, 168, 47, 1);
  border-radius: 100% 0 0 100% / 50% 0 0 50%;
  transform-origin: 100% 50%;
  transition: transform 1s linear;
`;

export const QuizContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SolvedQuestions = styled.div`
  width: 20%;
  padding: 20px;
`;

export const QuizArea = styled.div`
  width: 60%;
  padding: 20px;
`;

export const TimerArea = styled.div`
  width: 20%;
  padding: 20px;
`;

export const SolvedContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 20%;
`;

export const Barbox = styled.div`
  width: 10rem;
  height: 15px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  box-shadow: 0px 0px 4px darkgray;
`;

export const TimerCircle = styled.div`
  width: ${(props) => props.progress * 100}%;
  height: 100%;
  background-color: rgba(252, 168, 47, 1);
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const TimerWrapper = styled.div``;

export const CardBox = styled.div`
  margin: 3rem 0;
  text-align: left;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Card = styled.div`
  width: 30%;
  padding: 1.5rem;
  border: 0.5px solid #eaeaea;
  border-radius: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const CardHeader = styled.h4`
  border-bottom: 1px solid #eaeaea;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
`;

export const CardList = styled.ul`
  line-height: 1.5rem;
  color: #006fc0;
  margin: 1rem 0 0 1.5rem;
  list-style: disc;

  & li + li {
    margin-top: 1rem;
  }
`;

export const Br = styled.span`
  display: inline-block;
`;

export const Blue = styled.span`
  color: #006fc0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-pack: center;
  justify-content: space-between;
  padding-top: 1rem;
`;

export const InputWrapper = styled.div`
  padding-top: 10px;
`;

export const ResultContainer = styled.div`
  margin-right: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
