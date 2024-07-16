import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const useActions = (actions) => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
