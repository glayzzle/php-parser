// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78937_6.phpt
  it("Bug #78937.6 (Preloading unlinkable anonymous class can segfault)", function () {
    expect(parser.parseCode("<?php\ninclude(__DIR__ . \"/preload_bug78937.inc\");\nbar();\nvar_dump(new Foo);\n?>")).toMatchSnapshot();
  });
});
