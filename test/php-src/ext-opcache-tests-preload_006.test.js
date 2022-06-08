// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_006.phpt
  it("Handling of errors during linking", function () {
    expect(parser.parseCode("<?php\necho \"Foobar\\n\";\n?>")).toMatchSnapshot();
  });
});
