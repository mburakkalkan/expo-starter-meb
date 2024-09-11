import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import PageWrapper from "@/components/PageWrapper";

const screenOptions = {
  title: "Home",
  headerShown: false,
  headerRight: null
};

export default function Index() {
  return (
    <PageWrapper screenOptions={screenOptions}>
      <View style={styles.container}>
        <Text>Bu sayfa app/index.js içindeki anasayfadır.</Text>
        <Link href="/page2">Sayfa 2'ye git</Link>
      </View>
    </PageWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
