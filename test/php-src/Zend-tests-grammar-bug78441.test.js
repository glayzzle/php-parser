// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/bug78441.phpt
  it("Bug #78441 (Parse error due to heredoc identifier followed by digit)", function () {
    expect(() => parser.parseCode("<?php\necho <<<FOO\nFOO4\nFOO, PHP_EOL;\necho <<<FOO\nbar\nFOO4\nFOO, PHP_EOL;\necho <<<'FOO'\nbar\nFOO4\nFOO, PHP_EOL;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
