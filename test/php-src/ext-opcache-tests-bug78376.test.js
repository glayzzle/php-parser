// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78376.phpt
  it("Bug #78376 (Incorrect preloading of constant static properties)", function () {
    expect(parser.parseCode("<?php\nconst CNST = 'bbbb';\nvar_dump(\\A::$a);\n?>")).toMatchSnapshot();
  });
});
