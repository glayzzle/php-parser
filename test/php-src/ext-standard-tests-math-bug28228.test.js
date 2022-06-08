// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug28228.phpt
  it("Bug #28228 (number_format() does not allow empty decimal separator)", function () {
    expect(parser.parseCode("<?php\necho number_format(1234.5678, 4, '', '') . \"\\n\";\necho number_format(1234.5678, 4, NULL, ',') . \"\\n\";\necho number_format(1234.5678, 4, 0, ',') . \"\\n\";\necho number_format(1234.5678, 4);\n?>")).toMatchSnapshot();
  });
});
