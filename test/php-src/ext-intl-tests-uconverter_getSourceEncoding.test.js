// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_getSourceEncoding.phpt
  it("UConverter::getSourceEncoding()", function () {
    expect(parser.parseCode("<?php\n$c = new UConverter('utf-32', 'ascii');\nvar_dump($c->getSourceEncoding());\n?>")).toMatchSnapshot();
  });
});
