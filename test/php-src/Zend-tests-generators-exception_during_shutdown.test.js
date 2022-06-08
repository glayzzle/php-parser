// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/exception_during_shutdown.phpt
  it("Generator exceptions during shutdown should not be swallowed", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    try {\n        echo \"before yield\\n\";\n        yield;\n        echo \"after yield\\n\";\n    } finally {\n        echo \"before yield in finally\\n\";\n        yield;\n        echo \"after yield in finally\\n\";\n    }\n    echo \"after finally\\n\";\n}\n$gen = gen();\n$gen->rewind();\n?>")).toMatchSnapshot();
  });
});
