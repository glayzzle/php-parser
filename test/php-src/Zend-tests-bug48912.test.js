// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug48912.phpt
  it("Bug #48912 (Namespace causes unexpected strict behaviour with extract())", function () {
    expect(parser.parseCode("<?php\nnamespace A;\nfunction test()\n{\n    extract(func_get_arg(0));\n}\ntest(array('x' => 1));\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
