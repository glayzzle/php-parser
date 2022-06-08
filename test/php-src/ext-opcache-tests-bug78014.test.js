// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78014.phpt
  it("Bug #78014 (Preloaded classes may depend on non-preloaded classes due to unresolved consts)", function () {
    expect(parser.parseCode("<?php\n$c = new C;\nvar_dump($c->foo());\n?>")).toMatchSnapshot();
  });
});
