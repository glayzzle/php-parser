// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug72213.phpt
  it("Bug #72213 (Finally leaks on nested exceptions)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        throw new Exception('a');\n    } finally {\n        try {\n            throw new Exception('b');\n        } finally {\n        }\n    }\n}\ntry {\n    test();\n} catch (Exception $e) {\n    var_dump($e->getMessage());\n    var_dump($e->getPrevious()->getMessage());\n}\n?>")).toMatchSnapshot();
  });
});
