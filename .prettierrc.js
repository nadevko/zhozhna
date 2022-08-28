module.exports = {
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx}',
      options: {
        ...require('prettier-config-standard'),
        printWidth: 96
      }
    }
  ]
}
