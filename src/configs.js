import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Tung Hao Ming',
  subTitle: 'Creative Develoepr and designer',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: 'Tung Hao Ming Portfolio',
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who am I?',
      infos: [
        "* I am a creator and thinker who aims to create new things that will surprise everyone. I get the most satisfaction from trying new things.",
        '* Since 2015, six years ago, as a developer, I have been actively contributing to the legal and socially beneficial activities of various companies and individual entrepreneurs with very practical creations.',
        '* In the process, I became a creative developer with a high sense of responsibility, experienced skills, and an academic and future-oriented mindset.',
        '.Tung Hao Ming. February 18, 2021',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view!',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            websiteURL:
              'https://docs.google.com/document/d/1a2_wHLMpMm3ueFfu5hC211hS4o5yrP45CVYvXOhApys/edit#heading=h.ymi089liagec',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Personal Projects',
      footer: '(And also this web-app)',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: '/projects/preview/annotation.jpg',
            websiteURL: '/projects/3D-Viewer-with-annotations-R3F/index.html',
          },
          
          {
            url: '/projects/preview/forestExplorer.jpg',
            websiteURL:
              '/projects/3d-game/index.html',
          },
          {
            url: '/projects/preview/3d-portfolio.jpg',
            websiteURL:
              '',
          },
          {
            url: '/projects/preview/3dclock.jpg',
            websiteURL: 'projects/3dclock/index.html',
          },
          {
            url: '/projects/preview/Driving_Car_Physics_ThreeJs.jpg',
            websiteURL: '/projects/Driving_Car_Physics_CannonJS/index.html',
          },
          
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/Crazy',
          },
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/CrazyPassion-8784a2133/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/CrazyPassion',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:classicmusic218@gmail.com',
          },
        ],
      },
    },
  ],
};

export default configs;
