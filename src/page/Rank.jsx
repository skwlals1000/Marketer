import React, { useState } from "react";
import foodData from "../Data/test";
import styled from "styled-components";

function Rank() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(foodData);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // 검색어 처리 로직 수정
    const results = foodData.filter((food) =>
      food.restaurant.restaurantname.includes(searchTerm) || // 식당 이름으로 검색
      food.category1.includes(searchTerm) || // 카테고리1로 검색
      food.category2.includes(searchTerm)  // 카테고리2로 검색
    )
    setSearchResults(results);
    console.log("검색 결과:", results);
  };

  return (
    <div>
    <SearchContainer>
      <SearchButton onClick={handleSearch} disabled={!searchTerm}>검색</SearchButton>
      <SearchInput 
        type="text" 
        value={searchTerm} 
        onChange={handleInputChange} 
      />
    </SearchContainer>
      {/* 검색 결과를 출력하는 로직 추가 */}
      {searchResults.map((result) => (
        <Box key={result.id}>
          <h2>#{result.category1},{result.category2}</h2>
          <p>식당: {result.restaurant.restaurantname}</p>
          <p>주소: {result.restaurant.location}</p>
          <p>오픈 시간: {result.restaurant.openingHours}</p>
          <pre>별점: {result.rating}     리뷰 수: {result.reviewCount}</pre>
      <img src={result.image} alt={result.category1} /> {/* 이미지 출력 */}
      </Box>
      ))}
      </div>
  );
}

export default Rank;

const Box = styled.div`
// 박스 크기 조정
  width: 400px;
  border: 1px solid black; /* 테두리 설정 */
  padding: 20px; /* 내부 여백 설정 */
  margin-top: 20px; /* 상단 외부 여백 설정 */
  border-radius: 10px; /* 테두리 둥글게 설정 */
// 이미지 크기 조정
  img { /* Box 내부의 모든 img 태그에 적용됩니다 */
    max-width: 70%; /* 이미지의 최대 너비를 Box의 너비로 제한합니다 */
    height: auto; /* 너비에 맞춰 자동으로 높이를 조정합니다 */
  }
`;
const SearchContainer = styled.div`
  position: relative;
  width: 450px;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 3px 10px 3px 50px;
  border: 2px solid #56b890;
  border-radius: 18px;
  outline: none;
  font-size: 16px;

  &:focus {
    border-color: #007aff;
  }
`;
const SearchButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  height: 36px;
  padding: 0 10px;
  border: none;
  background: none;
  font-size: 16px;
  cursor: pointer;
`;


