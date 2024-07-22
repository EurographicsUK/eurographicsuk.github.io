import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Research Area',
      href: getPermalink('/research-area'),
    },
    {
      text: 'Applications',
      href: getPermalink('/applications'),
    },
    {
      text: 'Events',
      href: getPermalink('/events'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
    {
      text: 'Courses',
      href: getPermalink('/courses'),
    },
    {
      text: 'Conference Committees',
      href: getPermalink('/IPC'),
    },
    {
      text: 'Proceedings',
      href: getPermalink('/proceedings'),
    },
    {
      text: 'Thanks',
      href: getPermalink('/thanks'),
    },
    {
      text: 'Resources',
      href: getPermalink('/resources'),
    },
    {
      text: 'Contacts',
      href: getPermalink('/contact'),
    },
  ]
};

export const footerData = {
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  `,
};
