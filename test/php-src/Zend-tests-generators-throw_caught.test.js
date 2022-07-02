// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/throw_caught.phpt
  it("Generator::throw() where the exception is caught in the generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    echo \"before yield\\n\";\n    try {\n        yield;\n    } catch (RuntimeException $e) {\n        echo $e, \"\\n\\n\";\n    }\n    yield 'result';\n}\n$gen = gen();\nvar_dump($gen->throw(new RuntimeException('Test')));\n?>")).toMatchSnapshot();
  });
});
