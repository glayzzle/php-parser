// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/is_a.phpt
  it("is_a() and is_subclass_of() shouldn't call autoloader", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function ($name) {\n    echo(\"AUTOLOAD '$name'\\n\");\n    eval(\"class $name {}\");\n});\nclass BASE {\n}\ninterface I {\n}\nclass A extends BASE implements I {\n}\n$a = new A;\nvar_dump(is_a($a, \"B1\"));\nvar_dump(is_a($a, \"A\"));\nvar_dump(is_a($a, \"BASE\"));\nvar_dump(is_a($a, \"I\"));\nvar_dump(is_subclass_of($a, \"B2\"));\nvar_dump(is_subclass_of($a, \"A\"));\nvar_dump(is_subclass_of($a, \"BASE\"));\nvar_dump(is_subclass_of($a, \"I\"));\nvar_dump(is_subclass_of(\"X1\", \"X2\"));\n?>")).toMatchSnapshot();
  });
});
