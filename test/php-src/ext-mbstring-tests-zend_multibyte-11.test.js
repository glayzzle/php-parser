// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-11.phpt
  it("zend multibyte (11)", function () {
    expect(parser.parseCode("<?php\ndeclare(encoding=\"ISO-8859-15\") {\n    declare(encoding=\"ISO-8859-1\");\n    echo \"ok\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
