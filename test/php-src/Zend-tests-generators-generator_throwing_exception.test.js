// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_throwing_exception.phpt
  it("Generators can throw exceptions", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield 'foo';\n    throw new Exception('test');\n    yield 'bar';\n}\n$gen = gen();\nvar_dump($gen->current());\ntry {\n    $gen->next();\n} catch (Exception $e) {\n    echo 'Caught exception with message \"', $e->getMessage(), '\"', \"\\n\";\n}\nvar_dump($gen->current());\n?>")).toMatchSnapshot();
  });
});
