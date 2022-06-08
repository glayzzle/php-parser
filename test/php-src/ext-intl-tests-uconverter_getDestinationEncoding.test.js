// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_getDestinationEncoding.phpt
  it("UConverter::getDestinationEncoding()", function () {
    expect(parser.parseCode("<?php\n$c = new UConverter('UTF-7', 'ascii');\nvar_dump($c->getDestinationEncoding());\n?>")).toMatchSnapshot();
  });
});
