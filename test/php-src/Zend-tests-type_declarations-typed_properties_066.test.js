// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_066.phpt
  it("Typed property assignment must not overwrite constants", function () {
    expect(parser.parseCode("<?php\nclass Foo {\n    public float $x = 0.0;\n};\n$x = new Foo;\n$y =& $x->x;\n$y = 4;\nvar_dump($x, 4); /* Optimizer will merge both \"4\" constants, making it immediately visible */\n?>")).toMatchSnapshot();
  });
});
