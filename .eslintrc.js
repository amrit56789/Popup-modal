module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
      parser: "@babel/eslint-parser",
      sourceType: "module",
      ecmaVersion: 2020
    },
    env: {
      browser: true,
      node: true,
    },
    extends: [
      "plugin:vue/vue3-essential", // or "plugin:vue/vue3-strongly-recommended" or "plugin:vue/vue3-recommended" for stricter rules
    ],
    rules: {
      // Your custom rules
      "vue/multi-word-component-names": "off",
    },
  };
  