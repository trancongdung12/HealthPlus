import { Colors } from '../themes/index';
import { Icon } from '../themes/index';
const listFunctionHealth = [
  {
    id: 1,
    title: 'Chế độ dinh dưỡng',
    icon: Icon.icon_fastFood,
    i18nKey: 'Nutrition',
    backgroundColor: Colors.generality,
  },
  {
    id: 2,
    title: 'Kiểm tra triệu chứng',
    icon: Icon.icon_stethoscope,
    i18nKey: 'Check-for-symptoms',
    backgroundColor: Colors.symptom,
  },
  {
    id: 3,
    title: 'Đo nhịp tim',
    icon: Icon.icon_love,
    i18nKey: 'Measure-heartbeat',
    backgroundColor: Colors.health,
  },
  {
    id: 4,
    title: 'Đếm số bước chân',
    i18nKey: 'Step-counter',
    icon: Icon.icon_walking,
    backgroundColor: Colors.step,
  },
  {
    id: 5,
    title: 'Giờ giấc đi ngủ',
    icon: Icon.icon_sleep,
    i18nKey: 'Sleep-tracker',
    backgroundColor: Colors.sleep,
  },
];

export default listFunctionHealth;
