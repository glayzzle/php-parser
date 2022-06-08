// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/is_script_cached.phpt
  it("Test that script cached info is correct", function () {
    expect(parser.parseCode("<?php\nvar_dump(opcache_is_script_cached(__FILE__));\nvar_dump(opcache_is_script_cached(\"nonexistent.php\"));\n?>")).toMatchSnapshot();
  });
});
