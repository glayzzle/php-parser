// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter___construct_error.phpt
  it("Basic UConverter::convert() usage", function () {
    expect(parser.parseCode("<?php\n$c = new UConverter('utf-8', \"\\x80\");\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
