import { Colors } from '../../constants';

const styles = {
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    margin: 20,
  },
  containerTitle: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: Colors.BLACK,
  },
  containerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerMenuTitle: {
    marginLeft: 10,
  },
  menuTitle: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    color: Colors.BLACK,
  },
};

export default styles;
