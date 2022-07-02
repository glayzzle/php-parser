// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/resume_running_generator_error_003.phpt
  it("Use-after-free when resume an already running generator", function () {
    expect(parser.parseCode("<?php\nfunction gen(){\n    $g = yield;\n    $g->send($y);\n}\n$gen=gen();\ntry {\n    $gen->send($gen);\n}catch(y) {\n}\n?>")).toMatchSnapshot();
  });
});
