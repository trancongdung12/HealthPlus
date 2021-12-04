import { Colors, Images, Icon } from '../themes/index';
import { useDispatch, useSelector } from 'react-redux';
const dataProfile = useSelector((state) => state.profile.data);

const dataInformation = [
  {
    id: 2,
    icon: Icon.icon_gmail,
    title: dataProfile.email,
  },
  {
    id: 3,
    icon: Icon.icon_age,
    title: '20 tuổi',
  },
  {
    id: 4,
    icon: Icon.icon_height,
    title: '1m70',
  },
  {
    id: 5,
    icon: Icon.icon_weight,
    title: '65 kg',
  },
  {
    id: 6,
    icon: Icon.icon_gender,
    title: 'Nam',
  },
];

export default dataInformation;
