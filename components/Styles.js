import { StyleSheet } from 'react-native';

export const colors = {
  ligthBlue: '#4fb7e7',
  whiteBlue: '#9BD1E7',
  grayBlue: '#5597c9',
  gray: '#F7F7F7',
  blackPurple: '#19005e',
  red: '#e7525c'
}

export const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  button: {
    margin: 10,
    backgroundColor: colors.whiteBlue
  },
  header: {
    backgroundColor: colors.blackPurple,
    textAlign: 'center'
  },
  sectionItem: {
    paddingTop: 20,
    borderWidth: 1,
    borderColor: colors.gray
  },
  activeText: {
    color: colors.blackPurple
  },
  tabBarUnderline: {
    borderColor: colors.blackPurple,
    borderBottomWidth: 4
  },
  tabHeading: {
    textAlign: 'center',
    backgroundColor: colors.gray
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: colors.blackPurple,
  },
  title: {
    fontSize: 16,
    paddingLeft: 20,
    flexWrap: 'wrap',
    flex: 1,
    fontWeight: 'bold',
  },
  content: {
    padding: 30,
    fontSize: 16,
    flexWrap: 'wrap',
    flex: 1
  },
  textField: {
    textAlign: "center"
  }
});