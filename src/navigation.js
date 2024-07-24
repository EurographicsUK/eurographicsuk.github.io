import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/eguk-website-code/about'),
    },
    {
      text: 'Research Area',
      href: getPermalink('/eguk-website-code/research-area'),
    },
    {
      text: 'Applications',
      href: getPermalink('/eguk-website-code/applications'),
    },
    {
      text: 'Events',
      href: getPermalink('/eguk-website-code/events'),
    },
    {
      text: 'Blog',
      href: getPermalink('/eguk-website-code/blog'),
    },
    {
      text: 'Courses',
      href: getPermalink('/eguk-website-code/courses'),
    },
    {
      text: 'Conference Committees',
      href: getPermalink('/eguk-website-code/IPC'),
    },
    {
      text: 'Proceedings',
      href: getPermalink('/eguk-website-code/proceedings'),
    },
    {
      text: 'Thanks',
      href: getPermalink('/eguk-website-code/thanks'),
    },
    {
      text: 'Resources',
      href: getPermalink('/eguk-website-code/resources'),
    },
    {
      text: 'Contacts',
      href: getPermalink('/eguk-website-code/contact'),
    },
  ]
};

export const footerData = {
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
