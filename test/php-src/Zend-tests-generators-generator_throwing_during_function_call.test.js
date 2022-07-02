// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_throwing_during_function_call.phpt
  it("Stack is cleaned up properly when an exception is thrown during a function call", function () {
    expect(parser.parseCode("<?php\nfunction throwException() {\n    throw new Exception('test');\n}\nfunction gen() {\n    yield 'foo';\n    strlen(\"foo\", \"bar\", throwException());\n    yield 'bar';\n}\n$gen = gen();\nvar_dump($gen->current());\ntry {\n    $gen->next();\n} catch (Exception $e) {\n    echo 'Caught exception with message \"', $e->getMessage(), '\"', \"\\n\";\n}\nvar_dump($gen->current());\n?>")).toMatchSnapshot();
  });
});
