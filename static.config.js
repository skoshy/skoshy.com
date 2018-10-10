export default {
  getSiteData: () => ({
    title: 'redux-dusk Example',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/pages/Trello',
      },
      {
        path: '/reddit',
        component: 'src/pages/Reddit',
      },
      {
        path: '/reset',
        component: 'src/pages/Reset',
      },
      {
        is404: true,
        component: 'src/pages/404',
      },
    ];
  },
};
