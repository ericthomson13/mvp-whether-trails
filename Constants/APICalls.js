import { useSelector, useDispatch, } from 'react-redux';
import { setLocation, setCurrentLocation, } from '../store/actions/locationActions';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export const getLocation = async () => {
  const location = useSelector((state) => state.location.location);
  const dispatch = useDispatch();

  try {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      Location.requestPermissionsAsync();
      dispatch(setLocation(location));
    } else {
      let location = await Location.getCurrentPositionAsync({timeout: 10000});
      dispatch(setLocation(location));
      dispatch(setCurrentLocation(location));
    }
  } catch {
    console.log('error in getLocation ');
  }
};