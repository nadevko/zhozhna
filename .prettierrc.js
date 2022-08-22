module.exports = {
  overrides: [
    {
      files: '*.{js,jsx,ts,tsx,mjs,cjs}',
      options: {
        ...require('prettier-config-standard'),
        printWidth: 96
      }
    }
  ]
}
