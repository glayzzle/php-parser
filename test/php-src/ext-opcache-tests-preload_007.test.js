// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_007.phpt
  it("Handling of includes that were not executed", function () {
    expect(parser.parseCode("<?php\necho \"Foobar\";\n?>")).toMatchSnapshot();
  });
});
