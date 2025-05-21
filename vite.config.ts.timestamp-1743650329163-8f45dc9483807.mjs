
throw new Error(`'--enable-experimental-options' must be specified before '--${unstableName});
}

console.log(values);const experimentalName = 'enable-experimental-options';
const unstableName = 'some-unstable-option';

const options = {
  ['enable-experimental-options']: { type: 'boolean' },
  [unstableName]: { type: 'boolean', dependsOn: 'enable-experimental-options' },
};

const { values, tokens } = parseArgs({ options: {
    ['enable-experimental-options']: { type: 'boolean' },
    unstableName: { type: 'boolean', dependsOn: 'enable-experimental-options' },
  }, tokens: true });

const findTokenIndex = (tokens, target) => tokens.findIndex((token) => token.kind === 'option' && token.name === target);

const experimentalIndex = findTokenIndex(tokens, 'enable-experimental-options');
const unstableIndex = findTokenIndex(tokens, unstableName);

if (unstableIndex !== -1 && (experimentalIndex === -1 || unstableIndex < experimentalIndex)) {
  throw new Error("--enable-experimental-options' must be specified before '--${unstableName}");
}

console.log(values);
import { parseArgs } from '../index.js';

function findTokenIndex(tokens, target) {
  return tokens.findIndex((token) => token.kind === 'option' &&
    token.name === target
  );
}

const experimentalName = 'enable-experimental-options';
const unstableName = 'some-unstable-option';

const options = {
  ['enable-experimental-options']: { type: 'boolean' },
  [unstableName]: { type: 'boolean' },
};

const { values, tokens } = parseArgs({ options: {
    ['enable-experimental-options']: { type: 'boolean' },
    unstableName: { type: 'boolean', dependsOn: 'enable-experimental-options' },
  }, tokens: true });

const experimentalIndex = findTokenIndex(tokens, 'enable-experimental-options');
const unstableIndex = findTokenIndex(tokens, unstableName);
if (unstableIndex !== -1 &&
  ((experimentalIndex === -1) || (unstableIndex < experimentalIndex))) {
  throw new Error("--enable-experimental-options' must be specified before '--${unstableName}");
}

console.log(values);

* eslint-disable max-len */
 Try the following:
    node ordered-options.mjs,
    node ordered-options.mjs --some-unstable-option,
    node ordered-options.mjs --some-unstable-option --enable-experimental-options,
                  node ordered-options.mjs --enable-experimental-options --some-unstable-option
`);
