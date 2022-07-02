// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_008.phpt
  it("Try finally (with break in do...while)", function () {
    expect(parser.parseCode("<?php\nfunction foo () {\n    do {\n        try {\n            try {\n            } finally {\n                break;\n            }\n        } catch (Exception $e) {\n        } finally {\n        }\n    } while (0);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
