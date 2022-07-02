// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/yield_in_force_closed_finally_error.phpt
  it("yield cannot be used in a finally block when the generator is force-closed", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    try {\n        echo \"before yield\\n\";\n        yield;\n        echo \"after yield\\n\";\n    } finally {\n        echo \"before yield in finally\\n\";\n        yield;\n        echo \"after yield in finally\\n\";\n    }\n    echo \"after finally\\n\";\n}\n$gen = gen();\n$gen->rewind();\nunset($gen);\n?>")).toMatchSnapshot();
  });
});
