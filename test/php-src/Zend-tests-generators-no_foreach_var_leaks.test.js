// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/no_foreach_var_leaks.phpt
  it("foreach() (and other) variables aren't leaked on premature close", function () {
    expect(parser.parseCode("<?php\nfunction gen(array $array) {\n    foreach ($array as $value) {\n        yield $value;\n    }\n}\n$gen = gen(['Foo', 'Bar']);\nvar_dump($gen->current());\n// generator is closed here, without running SWITCH_FREE\n?>")).toMatchSnapshot();
  });
});
