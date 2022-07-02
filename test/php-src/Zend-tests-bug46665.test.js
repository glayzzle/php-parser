// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug46665.phpt
  it("Bug #46665 (Triggering autoload with a variable classname causes truncated autoload param)", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($class) {\n    var_dump($class);\n    require __DIR__ .'/bug46665_autoload.inc';\n});\n$baz = '\\\\Foo\\\\Bar\\\\Baz';\nnew $baz();\n?>")).toMatchSnapshot();
  });
});
