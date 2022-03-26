import { Colors } from '../../constants';

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.TRANSPARENT,
    justifyContent: 'flex-end'
  },
  content: {
    height: '40%',
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    justifyContent: 'space-between'
  },
  containerTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItem: 'center',
    padding: 20,
  },
  title: {
	  fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: Colors.BLACK,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: Colors.BLACK,
    width: '100%',
    paddingVertical: 20
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    color: Colors.WHITE,
  },
  containerTextInput: {
    marginHorizontal: 20,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Colors.GREY
  }
};

export default styles;
