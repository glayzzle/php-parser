// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_050.phpt
  it("Weak casts must not overwrite source variables", function () {
    expect(parser.parseCode("<?php\n$b = 1;\n$a = \"$b\";\nclass A { public int $a; }\n$o = new A;\n$o->a = $b;\nvar_dump($o, $a);\n?>")).toMatchSnapshot();
  });
});
