const isLocalhost = typeof window !== 'undefined' && window.location.host === 'localhost:3000'

module.exports = {
  backend: isLocalhost ?
    {
      name: 'test-repo'
    } :
    {
      name: 'github',
      repo: 'champozo/netlify',
      base_url:'https://netlify-mu.vercel.app',
      auth_endpoint: 'api/auth/',
      branch: 'master',
    },
  // load_config_file: false,
  media_folder: 'public/img/drops',
  public_folder: '/img/drops',
  publish_mode: 'editorial_workflow',
  collections: [
    {
      name: 'drop',
      label: 'Upcoming Drops',
      folder: 'content/drops',
      create: true,
      extension: 'json',
      slug: '{{fields.name}}',
      identifier_field: 'name',
      fields: [
        { label: "Name", name: 'name', widget: 'string' },
        { label: 'Description', name: 'description', widget: 'text' },
        { label: 'Twitter URL', name: 'twitter', widget: 'string' },
        { label: 'Discord URL', name: 'discord', widget: 'string' },
        { label: 'Image', name: 'image', widget: 'image', allow_multiple: false },
        { label: 'Mint Website', name: 'website', widget: 'string'  },
        { label: 'Mint date', name: 'date', widget: 'datetime', format: "MM-DD", dateFormat: "MM-DD", timeFormat: false },
        { label: 'Mint price', name: 'price', widget: 'number', value_type: 'float' },
      ]
    }
  ]
}
