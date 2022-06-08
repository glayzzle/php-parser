// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_dynamic_def_removal.phpt
  it("Preloading dynamic def in method/function", function () {
    expect(parser.parseCode("<?php\ndynamic();\ndynamic2();\n?>")).toMatchSnapshot();
  });
});
