// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/instanceof.phpt
  it("instanceof shouldn't call autoloader", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    echo(\"AUTOLOAD '$name'\\n\");\n    eval(\"class $name {}\");\n});\nclass A {\n}\n$a = new A;\nvar_dump($a instanceof B);\nvar_dump($a instanceof A);\n?>")).toMatchSnapshot();
  });
});
