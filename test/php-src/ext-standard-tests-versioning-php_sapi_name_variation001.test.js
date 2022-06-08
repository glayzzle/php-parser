// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/versioning/php_sapi_name_variation001.phpt
  it("php_sapi_name() function when switching to webserver by using post", function () {
    expect(parser.parseCode("<?php\necho php_sapi_name();\n?>")).toMatchSnapshot();
  });
});
