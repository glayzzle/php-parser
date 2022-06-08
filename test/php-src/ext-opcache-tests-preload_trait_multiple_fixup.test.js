// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_trait_multiple_fixup.phpt
  it("Op array fixed up multiple times during preloading", function () {
    expect(parser.parseCode("<?php\n(new C2)->method();\n(new C4)->method();\n?>")).toMatchSnapshot();
  });
});
