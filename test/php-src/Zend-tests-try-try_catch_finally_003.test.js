// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_catch_finally_003.phpt
  it("Try catch finally (multi catch blocks with return)", function () {
    expect(parser.parseCode("<?php\nclass AE extends Exception {};\nclass BE extends Exception {};\nfunction foo () {\n    try {\n        try {\n            try {\n                throw new Exception(\"try\");\n            } catch (AE $e) {\n                die(\"error\");\n            } finally {\n               echo \"1\";\n            }\n        } finally {\n           echo \"2\";\n        }\n    } catch (BE $e) {\n      die(\"error\");\n    } catch (Exception $e) {\n        echo \"3\";\n    } finally {\n        echo \"4\";\n        return 4;\n    }\n   return 5;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
