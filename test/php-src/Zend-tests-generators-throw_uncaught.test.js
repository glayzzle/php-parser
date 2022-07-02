// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/throw_uncaught.phpt
  it("Generator::throw() where the exception is not caught in the generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield 'thisThrows';\n    yield 'notReached';\n}\n$gen = gen();\nvar_dump($gen->throw(new RuntimeException('test')));\n?>")).toMatchSnapshot();
  });
});
