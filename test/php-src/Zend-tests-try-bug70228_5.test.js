// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug70228_5.phpt
  it("Bug #70228 (memleak if return hidden by throw in finally block)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        return str_repeat(\"a\", 2);\n    } finally {\n        throw new Exception(\"ops\");\n    }\n}\ntry {\n    test();\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
