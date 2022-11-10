
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useRoute } from "@react-navigation/native";
import { useGetOneQuery } from "../../API/api";
import MyText from "../../Components/MyText";
import globalStyles from "../../Theme/global.styles";

// ====================================================================

export default function ShowUserScreen() {
  const { params } = useRoute();
  const { id }: any = params;
  const { data } = useGetOneQuery({ entity:"user", id });

  // --------------------------------------

  return (
    <SafeAreaView style={globalStyles.screen}>
      <ScrollView style={styles.container}>
        {Object.entries(data || {})?.map(([key, value], index) => (
          <View style={styles.row} key={index}>
            <MyText text={key + ": "} style={{ fontWeight: "bold" }} />
            <MyText text={value} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

// ====================================================================

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    paddingHorizontal: wp(4),
    paddingVertical: wp(4),
  },
  key: { fontWeight: "bold" },
  row: { flexDirection: "row" },
});
