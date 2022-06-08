// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug26697.phpt
  it("Bug #26697 (calling class_exists on a nonexistent class in autoloader results in segfault)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    echo __METHOD__ . \"($name)\\n\";\n    var_dump(class_exists('NotExistingClass'));\n    echo __METHOD__ . \"($name), done\\n\";\n});\nvar_dump(class_exists('NotExistingClass'));\n?>")).toMatchSnapshot();
  });
});
