import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  button: {
    margin: 10
  },
  sectionItem: {
    paddingTop: 20
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
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
  }
});