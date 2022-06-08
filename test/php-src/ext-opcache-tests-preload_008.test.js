// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_008.phpt
  it("Preloading of anonymous class", function () {
    expect(parser.parseCode("<?php\nvar_dump(get_anon());\n?>")).toMatchSnapshot();
  });
});
