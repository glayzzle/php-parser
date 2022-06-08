// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78937_4.phpt
  it("Bug #78937.4 (Preloading unlinkable anonymous class can segfault)", function () {
    expect(parser.parseCode("<?php\nclass Bar {\n}\nbar();\nvar_dump(new Foo);\n?>")).toMatchSnapshot();
  });
});
