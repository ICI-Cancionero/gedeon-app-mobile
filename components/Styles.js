import { StyleSheet } from 'react-native';

export const colors = {
  ligthBlue: '#4fb7e7',
  whiteBlue: '#9BD1E7',
  white: '#f0f8fc',
  grayBlue: '#5597c9',
  gray: '#F7F7F7',
  blackPurple: '#19005e',
  red: '#e7525c'
}

export const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1
  },
  button: {
    backgroundColor: colors.grayBlue,
    borderRadius: 4,
    padding: 10,
    alignSelf: 'flex-end',
    marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white'
  },
  header: {
    backgroundColor: colors.blackPurple,
    textAlign: 'center',
    alignSelf: 'center',
    paddingVertical: 40,
    width: '100%'
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 21
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
    backgroundColor: colors.blackPurple,
    borderColor: colors.blackPurple,
    borderBottomWidth: 4,
    flexDirection: 'row',
    width: '100%'
  },
  tabButton: {
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '50%',
    flex: 1
  },
  tabButtonActive: {
    backgroundColor: colors.white,
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: '50%',
    flex: 1,
    color: 'black'
  },
  tabTextActive: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'black'
  },
  tabText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white'
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
    fontWeight: 'bold',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  content: {
    padding: 30,
    fontSize: 16
  },
  textField: {
    textAlign: "center",
    fontSize: 20,
    borderWidth: 2,
    borderColor: colors.gray,
    padding: 10
  }
});