// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/versioning/php_sapi_name.phpt
  it("php_sapi_name test", function () {
    expect(parser.parseCode("<?php\nvar_dump(php_sapi_name());\n?>")).toMatchSnapshot();
  });
});
