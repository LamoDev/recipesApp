import { View, StyleSheet, Platform } from "react-native";

function ContainerShadow({ children }) {
  return <View style={styles.shadow}>{children}</View>;
}

export default ContainerShadow;

const styles = StyleSheet.create({
  shadow: {
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // the ripple effect goes out of the container a little bit
    overflow: Platform.OS == "android" ? "hidden" : "visible",
  },
});
