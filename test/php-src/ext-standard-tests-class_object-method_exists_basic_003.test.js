// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/class_object/method_exists_basic_003.phpt
  it("method_exists() on non-existent class, with __autoload().", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    echo \"In autoload($name)\\n\";\n});\nvar_dump(method_exists('UndefC', 'func'));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
