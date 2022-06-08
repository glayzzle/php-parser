// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exit_finally_2.phpt
  it("exit() and finally (2)", function () {
    expect(parser.parseCode("<?php\n// TODO: In the future, we should execute the finally block.\ntry {\n    try {\n        exit(\"Exit\\n\");\n    } catch (Throwable $e) {\n        echo \"Not caught\\n\";\n    } finally {\n        throw new Exception(\"Finally exception\");\n    }\n    echo \"Not executed\\n\";\n} catch (Exception $e) {\n    echo \"Caught {$e->getMessage()}\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
