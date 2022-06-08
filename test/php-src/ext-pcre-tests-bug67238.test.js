// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug67238.phpt
  it("Bug #67238 Ungreedy and min/max quantifier bug in PCRE 8.34 upstream", function () {
    expect(parser.parseCode("<?php\necho preg_match('/a{1,3}b/U', 'ab');\n?>")).toMatchSnapshot();
  });
});
