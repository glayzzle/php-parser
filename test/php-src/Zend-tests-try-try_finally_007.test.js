// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_007.phpt
  it("Try finally (with goto previous label)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n    try {\nlabel:\n        echo \"label\";\n        try {\n        } finally {\n            goto label;\n            echo \"dummy\";\n        }\n    } catch (Exception $e) {\n    } finally {\n    }\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
