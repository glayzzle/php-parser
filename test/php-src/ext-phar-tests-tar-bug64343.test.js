// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/bug64343.phpt
  it("Bug #64343 (phar cannot open tars with pax headers)", function () {
    expect(parser.parseCode("<?php\necho \"Test\\n\";\n$phar = new PharData(__DIR__.\"/files/bug64343.tar\");\n?>")).toMatchSnapshot();
  });
});
