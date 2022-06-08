// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-16.phpt
  it("zend multibyte (16)", function () {
    expect(parser.parseCode("<?php\ndeclare(encoding=\"ISO-8859-15\") {\n    echo \"ok\\n\";\n}\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
