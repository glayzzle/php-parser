// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_class_alias.phpt
  it("Bug #78918: Class alias during preloading causes assertion failure", function () {
    expect(parser.parseCode("<?php\nvar_dump(class_exists('A'));\nvar_dump(class_exists('B'));\n?>")).toMatchSnapshot();
  });
});
