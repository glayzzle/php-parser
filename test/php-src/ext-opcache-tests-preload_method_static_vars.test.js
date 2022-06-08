// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_method_static_vars.phpt
  it("Preloading inherited method with separated static vars", function () {
    expect(parser.parseCode("<?php\nFoo::test();\nBar::test();\n?>")).toMatchSnapshot();
  });
});
