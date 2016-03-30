System.config({
    baseUrl: './src',
  packages: {
    app: {
      format: 'register',
      defaultExtension: 'js'
    }
  }
});

System.import('app/main')
  .then(null, console.error.bind(console));