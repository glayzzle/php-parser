// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug79022.phpt
  it("Bug #79022 (class_exists returns True for classes that are not ready to be used)", function () {
    expect(parser.parseCode("<?php\nfunction my_autoloader($class) {\n    if (class_exists('Foo', 0)) {\n        new Foo();\n    }\n    if ($class == 'Foo') {\n        eval(\"class Foo extends Bar{}\");\n    }\n    if ($class == 'Bar') {\n        eval(\"class Bar {}\");\n    }\n    if ($class == 'Dummy') {\n        eval (\"class Dummy implements iFoo {}\");\n    }\n    if (interface_exists('iFoo', 0)) {\n        new Dummy();\n    }\n    if ($class == 'iFoo') {\n        eval (\"interface iFoo extends iBar {}\");\n    }\n    if ($class == 'iBar') {\n        eval (\"interface iBar {}\");\n    }\n}\nspl_autoload_register('my_autoloader');\nnew Foo();\nnew Dummy();\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
