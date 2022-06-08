// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug79797.phpt
  it("Bug #79797 (Use of freed hash key in the phar_parse_zipfile function)", function () {
    expect(parser.parseCode("<?php\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
