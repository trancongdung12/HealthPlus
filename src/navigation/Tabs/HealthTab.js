import I18n from '../../i18n/i18n';

export default HealthTab = (listIcon, selectedIconColor) => {
  return {
    stack: {
      id: 'Health',
      children: [
        {
          component: {
            name: 'Health',
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
                titleDisplayMode: 'alwaysShow',
                text: I18n.t('health'),
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
