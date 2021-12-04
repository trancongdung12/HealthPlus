import I18n from '../../i18n/i18n';

export default HomeTab = (listIcon, selectedIconColor) => {
  return {
    stack: {
      id: 'HomeTab',
      children: [
        {
          component: {
            name: 'Home',
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
                text: I18n.t('home'),
                icon: listIcon[0],
                selectedIconColor: selectedIconColor,
                animate: false,
              },
            },
          },
        },
      ],
    },
  };
};
