// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_returns_generator.phpt
  it("A generator function returns a Generator object", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    // execution is suspended here, so the following never gets run:\n    echo \"Foo\";\n    // trigger a generator\n    yield;\n}\n$generator = gen();\nvar_dump($generator instanceof Generator);\n?>")).toMatchSnapshot();
  });
});
