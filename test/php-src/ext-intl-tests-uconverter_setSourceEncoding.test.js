// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_setSourceEncoding.phpt
  it("UConverter::setSourceEncoding()", function () {
    expect(parser.parseCode("<?php\n$c = new UConverter('latin1', 'ascii');\nvar_dump($c->getSourceEncoding());\n$c->setSourceEncoding('utf-7');\nvar_dump($c->getSourceEncoding());\n?>")).toMatchSnapshot();
  });
});
