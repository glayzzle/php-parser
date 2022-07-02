// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/unset_cv08.phpt
  it("unset() CV 8 (unset() of global variable in array_unique($GLOBALS))", function () {
    expect(parser.parseCode("<?php\n$a = \"ok\\n\";\n$b = \"ok\\n\";\n@array_unique($GLOBALS);\necho $a;\necho $b;\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
