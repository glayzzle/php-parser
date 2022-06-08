// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_set_previous_leak.phpt
  it("Leak when setting recursive previous exception in finally handling", function () {
    expect(parser.parseCode("<?php\ntry {\n    try {\n        throw new Exception(\"Test\");\n    } catch (Exception $e) {\n        throw $e;\n    } finally {\n        throw $e;\n    }\n} catch (Exception $e2) {\n    echo $e2->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
