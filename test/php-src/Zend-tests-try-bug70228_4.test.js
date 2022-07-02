// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/bug70228_4.phpt
  it("Bug #70228 (memleak if return in finally block)", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    try {\n        throw new Exception(1);\n    } finally {\n        try {\n            try {\n                try {\n                } finally {\n                    return 42;\n                }\n            } finally {\n                throw new Exception(3);\n            }\n        } catch (Exception $e) {}\n    }\n}\ntry {\n    var_dump(test());\n} catch (Exception $e) {\n    do {\n        echo $e->getMessage() . \"\\n\";\n        $e = $e->getPrevious();\n    } while ($e);\n}\n?>")).toMatchSnapshot();
  });
});
