// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug72213_2.phpt
  it("Bug #72213 (Finally leaks on nested exceptions)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        throw new Exception(1);\n    } finally {\n        try {\n            try {\n                throw new Exception(2);\n            } finally {\n            }\n        } catch (Exception $e) {\n        }\n    }\n}\ntry {\n    test();\n} catch (Exception $e) {\n    echo \"caught {$e->getMessage()}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
