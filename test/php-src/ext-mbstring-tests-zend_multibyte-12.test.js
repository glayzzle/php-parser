// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/zend_multibyte-12.phpt
  it("zend multibyte (12)", function () {
    expect(parser.parseCode("<?php\ndeclare(encoding=\"ISO-8859-15\");\necho 1;\ndeclare(encoding=\"ISO-8859-1\");\n?>")).toMatchSnapshot();
  });
});
