// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/throw_rethrow.phpt
  it("Generator::throw() where the generator throws a different exception", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    echo \"before yield\\n\";\n    try {\n        yield;\n    } catch (RuntimeException $e) {\n        echo 'Caught: ', $e, \"\\n\\n\";\n        throw new LogicException('new throw');\n    }\n}\n$gen = gen();\nvar_dump($gen->throw(new RuntimeException('throw')));\n?>")).toMatchSnapshot();
  });
});
