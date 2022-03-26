import { Colors } from '../../constants';

const styles = {
  container: {
    paddingLeft: 20,
    paddingVertical: 15,
    borderBottomColor: Colors.GREY,
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  containerCheckBox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: Colors.GREY,
  },
  containerTitle: {
    justifyContent: 'center',
    paddingLeft: 20,
  },
  title: status => ({
    fontSize: 16,
    fontFamily: 'Roboto-Reguler',
    color: Colors.BLACK,
    textDecorationLine: status ? 'line-through' : null,
    textDecorationStyle: status ? 'solid' : null,
  }),
};

export default styles;
