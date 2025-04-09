import { StyleSheet } from "react-native";

const mainStyleScroll = StyleSheet.create({
  container: {
    flex: 1, // Gör så att ScrollView fyller hela höjden på skärmen
    backgroundColor: '#fff2cf', // Bakgrundsfärg för ScrollView
  },
  contentContainerStyle: {
    alignItems: 'center', // Centrera innehållet horisontellt
    justifyContent: 'center', // Centrera innehållet vertikalt
    flexGrow: 1, // Gör så att innehållet fyller hela höjden på skärmen
  },
  text: {
    fontFamily: 'mainFont', // Använd ditt fontnamn här
    color: '#6cdbaeff', // Textfärg
    fontSize: 30,
    textAlign: 'center',
  }
});

export default mainStyleScroll;
