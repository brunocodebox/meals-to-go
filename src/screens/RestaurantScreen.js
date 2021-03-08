import React, { useState } from "react";
import styled from "styled-components";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";

// If we have a property from an external component to reference in a styled component the syntax will be:
// However we don't use the StatusBar component but it is written here for demonstration.
// const SafeAreaStatus = styles(SafeAreaView)`
//   flex: 1;
//   margin-top: ${StatusBar.currentHeight}px; // don't forget we are inside a template string so use ${...}
// `;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

// styled is a component imported from styled-components (not from styled-components/native as in the course).
// And this component receives the props by default and in it there is the theme because the App was wrapped
// with ThemeProvider.
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space.normal};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space.small};
`;

export const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <SafeArea forceInset={{ top: "always" }}>
      <SearchContainer>
        <Searchbar
          placeholder="Search restaurant"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

const styles = StyleSheet.create({});
