// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/resume_running_generator_error_002.phpt
  it("Memory leak when resume an already running generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    $g = yield;\n    $g->send($g);\n}\n$gen = gen();\ntry {\n    $gen->send($gen);\n} catch (Throwable $e) {\n    echo $e->getMessage() . \"\\n\";\t\n}\n?>")).toMatchSnapshot();
  });
});
