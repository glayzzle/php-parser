// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47516.phpt
  it("Bug #47516 (nowdoc can not be embed in heredoc but can be embed in double quote)", function () {
    expect(parser.parseCode("<?php\n$s='substr';\n$htm=<<<DOC\n{$s(<<<'ppp'\nabcdefg\nppp\n,0,3)}\nDOC;\necho \"$htm\\n\";\n$htm=<<<DOC\n{$s(<<<ppp\nabcdefg\nppp\n,0,3)}\nDOC;\necho \"$htm\\n\";\n$htm=\"{$s(<<<'ppp'\nabcdefg\nppp\n,0,3)}\n\";\necho \"$htm\\n\";\n?>")).toMatchSnapshot();
  });
});
