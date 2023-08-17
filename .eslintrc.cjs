module.exports = {
  extends: ['next/core-web-vitals', 'eslint-config-prettier', 'eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [["@","./src"]],
        "extensions": [".tsx",".ts"]  
      }
    }
  }
};