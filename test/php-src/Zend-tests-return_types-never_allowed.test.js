// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_allowed.phpt
  it("never return type: acceptable cases", function () {
    expect(parser.parseCode("<?php\nfunction foo(): never {\n    throw new Exception('bad');\n}\ntry {\n    foo();\n} catch (Exception $e) {\n    // do nothing\n}\nfunction calls_foo(): never {\n    foo();\n}\ntry {\n    calls_foo();\n} catch (Exception $e) {\n    // do nothing\n}\necho \"OK!\", PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
