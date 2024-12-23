import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text className="font-bold text-3xl font-rubik">Hello</Text>
      <Link href={"/sign-in"}>SignIn</Link>
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/properties/1"}>Property details</Link>
    </View>
  );
}
