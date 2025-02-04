import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import PageWrapper, {
  PageWrapperProps,
} from "@/components/PageWrapper";

const screenOptions: PageWrapperProps["screenOptions"] = {
  title: "Home",
  headerShown: false,
};

export default function Index() {
  return (
    <PageWrapper screenOptions={screenOptions}>
      <View style={styles.container}>
        <Text className="text-red-500 font-bold">
          Bu sayfa app/index.tsx içindeki anasayfadır.
        </Text>
        <Link href="/page2">Sayfa 2'ye git</Link>
      </View>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
