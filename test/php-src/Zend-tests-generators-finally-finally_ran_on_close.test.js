// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/finally/finally_ran_on_close.phpt
  it("finally is run even if a generator is closed mid-execution", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    try {\n        try {\n            echo \"before yield\\n\";\n            yield;\n            echo \"after yield\\n\";\n        } finally {\n            echo \"finally run\\n\";\n        }\n        echo \"code after finally\\n\";\n    } finally {\n        echo \"second finally run\\n\";\n    }\n    echo \"code after second finally\\n\";\n}\n$gen = gen();\n$gen->rewind();\nunset($gen);\n?>")).toMatchSnapshot();
  });
});
