// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug47517.phpt
  it("Bug #47517 test registry virtualization disabled", function () {
    expect(parser.parseCode("<?php\n/* This has to behave same way on both 64- and 32-bits. */\nfile_put_contents('C:\\Program Files\\myfile.txt', 'hello');\n?>")).toMatchSnapshot();
  });
});
