// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug70012.phpt
  it("Bug #70012 (Exception lost with nested finally block)", function () {
    expect(parser.parseCode("<?php\ntry {\n    echo \"Outer try\\n\";\n    try {\n        echo \"  Middle try\\n\";\n        throw new Exception();\n    } finally {\n        echo \"  Middle finally\\n\";\n        try {\n            echo \"    Inner try\\n\";\n        } finally {\n            echo \"    Inner finally\\n\";\n        }\n    }\n    echo \"Outer shouldn't get here\\n\";\n} catch (Exception $e) {\n    echo \"Outer catch\\n\";\n} finally {\n    echo \"Outer finally\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
