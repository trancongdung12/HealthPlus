/* eslint-disable prettier/prettier */
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import {Colors} from '../themes';
import HomeTab from './Tabs/HomeTab';
import UserTab from './Tabs/UserTab';
import HealthTab from './Tabs/HealthTab';
import AnnouncementTab from './Tabs/AnnouncementTab';
import UpgradeTab from './Tabs/UpgradeTab';

const pushScreen = (stackId, componentName, title, passProps) => {
  Navigation.push(stackId, {
    component: {
      name: componentName,
      passProps: {
        data: passProps,
      },
      options: {
        topBar: {
          title: {text: title},
        },
        bottomTabs: {
          visible: false,
        },
      },
    },
  });
};

const popScreen = stackId => {
  Navigation.pop(stackId);
};

const startRoot = () => {
  Promise.all([
    Icon.getImageSource('home', 20),
    Icon.getImageSource('heart', 20),
    Icon.getImageSource('user', 20),
    Icon.getImageSource('gift', 20),
  ]).then(([ic_book, ic_orders, ic_profile, ic_library]) => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          center: {
            bottomTabs: {
              id: 'TABS',
              options: {
                bottomTabs: {
                  animate: false, // <- i even added this one just in case, but not doing anything
                  titleDisplayMode: 'alwaysShow',
                },
              },
              children: [
                HomeTab([ic_book], Colors.primary),
                HealthTab([ic_orders], Colors.primary),
                UpgradeTab([ic_library], Colors.primary),
                UserTab([ic_profile], Colors.primary),
              ],
            },
          },
        },
      },
    });
  });
};

const startConnectGGFit = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'ConnectGGFit',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};

const startProfileSetup = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'ProfileSetup',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
const startIntro = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Intro',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
const startLogin = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'loginStack',
        children: [
          {
            component: {
              name: 'Login',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
const startEditInformation = () => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'EditInforStack',
        children: [
          {
            component: {
              name: 'EditInformation',
              options: {
                topBar: {
                  visible: false,
                },
              },
            },
          },
        ],
      },
    },
  });
};
const NavigationUtils = {
  pushScreen,
  popScreen,
  startRoot,
  startProfileSetup,
  startEditInformation,
  startIntro,
  startLogin,
  startConnectGGFit,
};
export default NavigationUtils;
