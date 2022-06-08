// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/finally/return_return.phpt
  it("try { return } finally { return } in generator", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    try {\n        try {\n            echo \"before return\\n\";\n            return;\n            echo \"after return\\n\";\n        } finally {\n            echo \"before return in inner finally\\n\";\n            return;\n            echo \"after return in inner finally\\n\";\n        }\n    } finally {\n        echo \"outer finally run\\n\";\n    }\n    echo \"code after finally\\n\";\n    yield; // force generator\n}\n$gen = gen();\n$gen->rewind(); // force run\n?>")).toMatchSnapshot();
  });
});
