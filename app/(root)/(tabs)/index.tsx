import { Link } from "expo-router";
import { Text, SafeAreaView, ScrollView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView>
      <Text className="font-bold text-3xl font-rubik">Home</Text>
      <Link href={"/sign-in"}>SignIn</Link>
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/properties/1"}>Property details</Link>
    </SafeAreaView>
  );
}
