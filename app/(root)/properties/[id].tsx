import { SafeAreaView, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Property = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  return (
    <SafeAreaView>
      <Text>Property {id}</Text>
    </SafeAreaView>
  );
};

export default Property;
