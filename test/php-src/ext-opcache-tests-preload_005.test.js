// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_005.phpt
  it("Handling of auto globals during preloading", function () {
    expect(parser.parseCode("<?php\n$x = 123;\nvar_dump(get_x());\n?>")).toMatchSnapshot();
  });
});
