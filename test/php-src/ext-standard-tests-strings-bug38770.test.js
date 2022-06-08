// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug38770.phpt
  it("Bug #38770 (unpack() broken with longs on 64 bit machines)", function () {
    expect(parser.parseCode("<?php\nforeach (array('N','l') as $v) {\n    print_r(unpack($v, pack($v, -30000)));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
