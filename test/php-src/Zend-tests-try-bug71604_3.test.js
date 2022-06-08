// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug71604_3.phpt
  it("Bug #71604: Aborted Generators continue after nested finally (3)", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    try {\n        throw new Exception(1);\n    } finally {\n        try {\n            yield;\n        } finally {\n            try {\n                throw new Exception(2);\n            } finally {\n            }\n        }\n    }\n}\ntry {\n    gen()->rewind();\n} catch (Exception $e) {\n    echo $e, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
