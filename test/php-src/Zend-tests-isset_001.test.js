// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/isset_001.phpt
  it("Testing isset and unset with variable variables", function () {
    expect(parser.parseCode("<?php\nprint \"- isset ---\\n\";\n$var_name = 'unexisting';\nif (isset($$var_name)) {\n    print \"error\\n\";\n}\n$test = 'var_name';\nif (isset($$$test)) {\n    print \"error\\n\";\n}\nprint \"- unset ---\\n\";\nunset($$var_name);\nunset($$$test);\nprint \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
