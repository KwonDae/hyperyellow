exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    borderColor: 'cyan',
    cursorColor: 'cyan',
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: cyan;
      }
      .tabs_nav .tabs_title {
        color: cyan;
      }
    `
  });
}
