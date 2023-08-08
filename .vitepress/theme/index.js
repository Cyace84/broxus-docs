import './main.scss';

import DefaultTheme from 'vitepress/theme';

import ProjectCard from './../components/shared/ProjectCard.vue';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    DefaultTheme.enhanceApp({ app });
    app.component('ProjectCard', ProjectCard);
  },
};
