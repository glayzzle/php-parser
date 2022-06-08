// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/live_range_phi_leak.phpt
  it("Missing live range if part of phi", function () {
    expect(parser.parseCode("<?php\nfunction doThrow() {\n    throw new Exception(\"Test\");\n}\nfunction test($k) {\n    // The 0 gives the QM_ASSIGN a non-refcounted type.\n    $res[$k ? $k : 0] = doThrow();\n}\ntry {\n    test(new stdClass);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
