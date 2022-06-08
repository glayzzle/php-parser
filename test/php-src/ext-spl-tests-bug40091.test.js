// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug40091.phpt
  it("Bug #40091 (issue with spl_autoload_register() and 2 instances of the same class)", function () {
    expect(parser.parseCode("<?php\nclass MyAutoloader {\n    function __construct($directory_to_use) {}\n    function autoload($class_name) {\n        // code to autoload based on directory\n    }\n}\n$autloader1 = new MyAutoloader('dir1');\nspl_autoload_register(array($autloader1, 'autoload'));\n$autloader2 = new MyAutoloader('dir2');\nspl_autoload_register(array($autloader2, 'autoload'));\nprint_r(spl_autoload_functions());\n?>")).toMatchSnapshot();
  });
});
