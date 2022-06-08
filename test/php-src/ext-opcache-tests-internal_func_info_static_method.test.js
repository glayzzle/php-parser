// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/internal_func_info_static_method.phpt
  it("Internal static methods should not be confused with global functions", function () {
    expect(parser.parseCode("<?php\nvar_dump(is_bool(_ZendTestClass::is_object()));\n?>")).toMatchSnapshot();
  });
});
