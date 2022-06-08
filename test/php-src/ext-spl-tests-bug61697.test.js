// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug61697.phpt
  it("Bug #61697 (spl_autoload_functions returns lambda functions incorrectly)", function () {
    expect(parser.parseCode("<?php\nfunction f1($class) { echo \"f1: [[$class]]\\n\"; }\nfunction f2($class) { echo \"f2: [[$class]]\\n\"; }\nspl_autoload_register('f1');\nspl_autoload_register('f2');\nspl_autoload_register(function($class) { echo \"cf1: [[$class]]\\n\"; });\nspl_autoload_register(function($class) { echo \"cf2: [[$class]]\\n\"; });\nforeach (spl_autoload_functions() AS $func)\n{\n    spl_autoload_unregister($func);\n}\nprint_r(spl_autoload_functions());\n?>")).toMatchSnapshot();
  });
});
