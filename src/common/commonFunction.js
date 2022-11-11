import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

export const logOutFunction = () => {
  auth().signOut();
};

export function flashMessage(
  message,
  description,
  type = 'success',
  icon = 'success',
) {
  showMessage({
    message,
    description,
    type,
    icon,
  });
}
