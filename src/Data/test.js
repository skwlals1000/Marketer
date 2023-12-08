import gimbapImage from "../Images/foodimages/Gimbap.jpg";
import Juk from "../Images/foodimages/Juk.jpg";
import kimchiGuk from "../Images/foodimages/kimchiGuk.jpg";
import tteokbokki from "../Images/foodimages/tteokbokki.jpg";
import ramen from "../Images/foodimages/ramen.jpg";

const test = [
  {
    id: 1,
    category1: "분식",
    category2: "김밥",
    restaurant: {
      restaurantname: "길거리 김밥집",
      location: "서울시 강남구 ",
      openingHours: "09:00 - 22:00",
      reviewCount: 120,
      rating: 4.3,
      image: gimbapImage,
    },
  },
  {
    id: 2,
    category1: "떡볶이",
    category2: "분식",
    restaurant: {
      restaurantname: "이모네 떡볶이",
      location: "서울시 강북구",
      openingHours: "09:00 - 22:00",
      reviewCount: 320,
      rating: 4.5,
      image: tteokbokki,
    },
  },
  {
    id: 3,
    category1: "라멘",
    category2: "돈카츠",
    restaurant: {
      restaurantname: "24시 라멘집",
      location: "서울시 은평구",
      openingHours: "09:00 - 22:00",
      rating: 4.9,
      reviewCount: 999,
      image: ramen,
    },
  },
  {
    id: 4,
    category1: "죽",
    category2: "밥",
    restaurant: {
      restaurantname: "본 죽",
      location: "서울시 강남구",
      openingHours: "09:00 - 22:00",
      reviewCount: 645,
      rating: 4.6,
      image: Juk,
    },
  },
  {
    id: 5,
    category1: "한식",
    category2: "밥",
    restaurant: {
      restaurantname: "마마의 김치찌개",
      location: "서울시 관악구",
      openingHours: "09:00 - 22:00",
      reviewCount: 553,
      rating: 4.7,
      image: kimchiGuk,
    },
  },
];

export default test;
