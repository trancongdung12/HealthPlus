import I18n from '../../i18n/i18n';
export default UpgradeTab = (listIcon, selectedIconColor) => {
  return {
    stack: {
      id: 'Upgrade',
      children: [
        {
          component: {
            name: 'Upgrade',
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
                text: I18n.t('upgrade'),
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
