// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/inc_array.phpt
  it("Do not constant fold increment of array", function () {
    expect(parser.parseCode("<?php\nfunction test_inc_array() {\n    $a = [];\n    $a++;\n}\nfunction test_inc_partial_array($k) {\n    $a = [];\n    $a[$k] = 0;\n    $a++;\n}\ntry {\n    test_inc_array();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test_inc_partial_array(0);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
