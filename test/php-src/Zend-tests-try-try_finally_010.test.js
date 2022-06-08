// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/try_finally_010.phpt
  it("Try finally (function call in the finally block after exception)", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    echo \"4\";\n}\nfunction bar() {\n    try {\n        echo \"2\";\n        throw new Exception();\n        echo \"x\";\n    } catch (MyEx $ex) {\n        echo \"x\";\n    } finally {\n        echo \"3\";\n        foo();\n        echo \"5\";\n    }\n}\ntry {\n    echo \"1\";\n    bar();\n    echo \"x\";\n} catch (Exception $ex) {\n    echo \"6\";\n}\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
