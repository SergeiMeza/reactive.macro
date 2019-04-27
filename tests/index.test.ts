import { join } from 'path';
import pluginTester from 'babel-plugin-tester';
import plugin from 'babel-plugin-macros';

pluginTester({
  pluginName: 'state.macro',
  plugin,
  babelOptions: {
    parserOpts: {
      plugins: ['jsx']
    },
  },
  fixtures: join(__dirname, '__fixtures__'),
});