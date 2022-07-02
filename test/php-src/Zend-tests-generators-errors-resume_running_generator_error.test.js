// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/resume_running_generator_error.phpt
  it("It is not possible to resume an already running generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    $gen = yield;\n    try {\n        $gen->next();\n    } catch (Error $e) {\n        echo \"\\nException: \" . $e->getMessage() . \"\\n\";\n    }\n    $gen->next();\n}\n$gen = gen();\n$gen->send($gen);\n$gen->next();\n?>")).toMatchSnapshot();
  });
});
