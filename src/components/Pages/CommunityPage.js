import { styled } from "styled-components";
import MainBg from "../MainBg";
import { Container } from "react-bootstrap";
import { useState } from "react";

let chartData = [
  {name : "AJ 네트웍스", totalGrd : "B+", envGrd : "C", socialGrd : "B+", govGrd : "B+"},
  {name : "AK 홀딩스", totalGrd : "B+", envGrd : "B", socialGrd : "A", govGrd : "B"},
  {name : "BGF", totalGrd : "B+", envGrd : "A", socialGrd : "A+", govGrd : "B"},
  {name : "BNK 금융지주", totalGrd : "A", envGrd : "A", socialGrd : "A", govGrd : "A"},
  {name : "BYC", totalGrd : "D", envGrd : "D", socialGrd : "D", govGrd : "D"},
]

const TheadStyle = styled.thead`
  box-shadow : inset 0 0 20px blue;
  border-bottom: 1px solid gray;
  padding : 10px;
  font-weight : bold;
`;

function CommunityPage(){
  let [num, setNum ] = useState([0,0,0,0,0]);

  return(
    <>
      <MainBg title="Community" subtitle="우리들의 대화공간"/>

      <Container>
        <h3 className="mb-5">ESG 기업 정보</h3>
        <table responsive="sm" className="table table-hover text-center">
          <TheadStyle>
            <tr>
              <th scope="col">#</th>
              <th scope="col">제목</th>
              <th scope="col">작성자</th>
              <th scope="col">조회수</th>
            </tr>
          </TheadStyle>
          <tbody>
            {
              chartData.map((i, j)=>{
                return(
                  <tr key={j}>
                    <td>{j+1}</td>
                    <td>{chartData[j].name}</td>
                    <td>{chartData[j].totalGrd}</td>
                    <td className="d-flex justify-content-center">
                      {num[j]}
                      <p className="ms-3" onClick={() => {
                          let copy = [...num];
                          copy[j] = copy[j] + 1;
                          setNum(copy)
                        }}>👍</p>
                    </td>
                  </tr>
                )})
            }
          </tbody>
        </table>
      </Container>
    </>
  )
};

export default CommunityPage;