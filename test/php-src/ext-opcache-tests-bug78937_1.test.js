// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78937_1.phpt
  it("Bug #78937.1 (Preloading unlinkable anonymous class can segfault)", function () {
    expect(parser.parseCode("<?php\nclass Bar {\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
