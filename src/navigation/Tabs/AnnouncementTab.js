export default AnnouncementTab = (listIcon, selectedIconColor) => {
  return {
    stack: {
      id: 'Announcement',
      children: [
        {
          component: {
            name: 'Announcement',
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
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
