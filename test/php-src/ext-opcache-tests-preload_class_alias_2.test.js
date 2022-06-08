// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_class_alias_2.phpt
  it("Bug #78918.2: Class alias during preloading causes assertion failure", function () {
    expect(parser.parseCode("<?php\nvar_dump(class_exists('B'));\nvar_dump(class_exists('C'));\n?>")).toMatchSnapshot();
  });
});
