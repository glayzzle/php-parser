// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug41372.phpt
  it("Bug #41372 (Internal pointer of source array resets during array copying)", function () {
    expect(parser.parseCode("<?php\n$Foo = array('val1', 'val2', 'val3');\nend($Foo);\necho key($Foo),\"\\n\";\n$MagicInternalPointerResetter = $Foo;\necho key($Foo),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
