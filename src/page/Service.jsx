import React from "react";
import styled from "styled-components";
import RangeSlider from "../components/RangeSlider";


const Service = () => {
  return (
    <Container>
      <Circle className="sweet">단맛</Circle>
      <RangeSlider />
      <Circle className="salty">짠맛</Circle>
      <RangeSlider />
      <Circle className="sour">신맛</Circle>
      <RangeSlider />
      <Circle className="bitter">쓴맛</Circle>
      <RangeSlider />
    </Container>
  );
};

const Circle = styled.h1`
  display: inline-block;
  background-color: ${(props) => {
    if (props.className === "sweet") {
      return "#ffb6c1"; // 단맛에 맞는 배경색
    } else if (props.className === "salty") {
      return "#87CEFA"; // 짠맛에 맞는 배경색
    } else if (props.className === "sour") {
      return "#90EE90"; // 신맛에 맞는 배경색
    } else if (props.className === "bitter") {
      return "#CD853F"; // 쓴맛에 맞는 배경색
    }
  }};
  color: #fff; /* 글자색 지정 */
  border-radius: 50%; /* 동그라미로 만들기 */
  padding: 10px; /* 내부 여백 지정 */
  margin-bottom: 10px; /* 아래 여백 지정 */
  text-align: center; /* 가운데 정렬 */
  font-size: 18px; /* 글자 크기 */
  font-weight: bold; /* 글자 굵기 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8); /* 그림자 효과 */
  padding: 10%;
`;
const Container = styled.div`
  width: 20%;
  height: 100%;
  padding: 50px; /* 내부 여백 지정 */
  background-color: #f2f2f2; /* 배경색 지정 */
  border-radius: 50px; /* 모서리 둥글게 */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
`;


export default Service;
