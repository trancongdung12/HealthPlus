import I18n from '../../i18n/i18n';

export default UserTab = (listIcon, selectedIconColor) => {
  return {
    stack: {
      id: 'User',
      children: [
        {
          component: {
            name: 'User',
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
                text: I18n.t('user'),
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
