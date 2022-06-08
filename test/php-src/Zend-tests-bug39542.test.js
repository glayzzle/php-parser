// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug39542.phpt
  it("Bug #39542 (Behaviour of require_once/include_once different to < 5.2.0)", function () {
    expect(parser.parseCode("<?php\n$oldcwd = getcwd();\nchdir(__DIR__);\nif (substr(PHP_OS, 0, 3) == 'WIN') {\n    set_include_path(__DIR__.'/bug39542;.');\n} else {\n    set_include_path(__DIR__.'/bug39542:.');\n}\nspl_autoload_register(function ($class) {\n    if (!require_once($class.'.inc')) {\n        error_log('Error: Autoload class: '.$class.' not found!');\n    }\n});\nnew bug39542();\nchdir($oldcwd);\n?>")).toMatchSnapshot();
  });
});
