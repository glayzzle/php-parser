// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/try/catch_novar_2.phpt
  it("catch without capturing a variable - exception in destructor", function () {
    expect(parser.parseCode("<?php\nclass ThrowsOnDestruct extends Exception {\n    public function __destruct() {\n        echo \"Throwing\\n\";\n        throw new RuntimeException(__METHOD__);\n    }\n}\ntry {\n    throw new ThrowsOnDestruct();\n} catch (Exception) {\n    echo \"Unreachable catch\\n\";\n}\necho \"Unreachable fallthrough\\n\";\n?>")).toMatchSnapshot();
  });
});
