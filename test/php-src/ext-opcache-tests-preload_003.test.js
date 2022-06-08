// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_003.phpt
  it("Preloading classes linked with traits", function () {
    expect(parser.parseCode("<?php\nY::foo();\nY::bar();\n?>\nOK")).toMatchSnapshot();
  });
});
