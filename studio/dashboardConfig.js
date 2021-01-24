export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '600d9b94df37f06e2e757b3c',
                  title: 'Sanity Studio',
                  name: 'sanity-demo-studio-5vespov1',
                  apiId: '2fdadd20-7f60-496f-9589-a9d7b79d452b'
                },
                {
                  buildHookId: '600d9b94df37f06e79757b4d',
                  title: 'Blog Website',
                  name: 'sanity-demo',
                  apiId: 'cb8cb730-860f-415a-a689-21b72f47c2c4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TanyaDolgopolova/sanity-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
