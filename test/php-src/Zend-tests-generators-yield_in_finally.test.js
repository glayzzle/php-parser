// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_in_finally.phpt
  it("yield can be used in finally (apart from forced closes)", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    try {\n        echo \"before return\\n\";\n        return;\n        echo \"after return\\n\";\n    } finally {\n        echo \"before yield\\n\";\n        yield \"yielded value\";\n        echo \"after yield\\n\";\n    }\n    echo \"after finally\\n\";\n}\n$gen = gen();\nvar_dump($gen->current());\n$gen->next();\n?>")).toMatchSnapshot();
  });
});
