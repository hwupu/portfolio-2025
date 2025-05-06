// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    "import/first": "off",
    "vue/no-multiple-template-root": "off",
    "vue/html-self-closing": "off",
  },
});
