import { Colors } from '../../constants';

const styles = {
  container: {
    paddingLeft: 20,
    paddingVertical: 15,
    borderBottomColor: Colors.GREY,
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  containerCheckBox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: Colors.GREY
  },
  containerTitle: {
    justifyContent: 'center',
    paddingLeft: 20
  },
  title: {
    fontSize: 15,
    fontFamily: 'Roboto-Reguler',
    color: Colors.BLACK
  }
};

export default styles;
