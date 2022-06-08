// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-10.phpt
  it("zend multibyte (10)", function () {
    expect(parser.parseCode("<?php\ndeclare(encoding=\"ISO-8859-15\");\ndeclare(encoding=\"ISO-8859-1\");\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
