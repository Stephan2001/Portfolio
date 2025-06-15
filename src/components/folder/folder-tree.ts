export const folderTree = {
  id: 'home',
  name: 'Home',
  children: [
    {
      id: 'portfolio',
      name: 'Portfolio',
      children: [
        { id: 'overview', name: 'Overview', children: [] },
        { id: 'experience', name: 'Experience', children: [] },
        { id: 'skills', name: 'Skills', children: [] },
        {
          id: 'projects',
          name: 'Projects',
          children: [
            { id: 'personal', name: 'Personal Projects', children: [] },
            { id: 'other', name: 'Other Projects', children: [] },
          ],
        },
      ],
    },
  ],
}
