// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug78853.phpt
  it("Bug #78853 (preg_match() may return integer > 1)", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/^|\\d{1,2}$/', \"7\"));\n?>")).toMatchSnapshot();
  });
});
