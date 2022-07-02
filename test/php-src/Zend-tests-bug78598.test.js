// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78598.phpt
  it("Bug #78598: Changing array during undef index RW error segfaults", function () {
    expect(parser.parseCode("<?php\n$my_var = null;\nset_error_handler(function() use(&$my_var) {\n    $my_var = 0;\n});\n$my_var[0] .= \"xyz\";\nvar_dump($my_var);\n$my_var = null;\n$my_var[0][0][0] .= \"xyz\";\nvar_dump($my_var);\n$my_var = null;\n$my_var[\"foo\"] .= \"xyz\";\nvar_dump($my_var);\n$my_var = null;\n$my_var[\"foo\"][\"bar\"][\"baz\"] .= \"xyz\";\nvar_dump($my_var);\n?>")).toMatchSnapshot();
  });
});
