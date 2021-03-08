import React from "react";
import styled from "styled-components";
import { Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../assets/star";
import open from "../../assets/open";

// We can use two forms of syntax to style a 'styled' component
// Either styled(Component)`` when styled does not have that component. It is for external components.
// or styled.Component`` when styled has that component it its library

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space.normal};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantInfo = styled.View`
  padding: ${(props) => props.theme.space.normal};
`;

// Here we are using the ThemeProvider in the App and the local theme we setup is in theme.index.js
// The ThemeProvider has a theme property we can customize to specify the specific themes we need.
// Note the syntax to make reference to a theme color, it is a function with arrow function.
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;

const RatingOpenRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${(props) => props.theme.space.small};
  padding-bottom: ${(props) => props.theme.space.small};
`;

// The array of star components will default to column view and we need an array of stars
const RatingRow = styled.View`
  flex-direction: row;
`;

const SvgAsset = styled(SvgXml)`
  width: 20px;
  height: 20px;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://picsum.photos/700"],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  // To get the number of rating stars, we simply create an array containing n rating elements then
  // map over these elements and for each we return a XmlSvg component.
  const ratingArray = [...Array(Math.floor(rating))].map((_, i) => {
    return <SvgXml key={i} xml={star} width={20} height={20} />;
  });

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <RestaurantInfo>
        <Title>{name}</Title>
        <RatingOpenRow>
          <RatingRow>
            {ratingArray.map((_, i) => (
              <SvgAsset key={i} xml={star} />
            ))}
          </RatingRow>
          {isClosedTemporarily && (
            <Text variant="label">CLOSED TEMPORARILY</Text>
          )}
          {isOpenNow && <SvgAsset xml={open} />}
          <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
        </RatingOpenRow>
        <Address>{address}</Address>
      </RestaurantInfo>
    </RestaurantCard>
  );
};
