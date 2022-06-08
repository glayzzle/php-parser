// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/assign_obj_exceptions.phpt
  it("Make sure various ASSIGN_OBJ exceptions are not optimized away", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public stdClass $x;\n}\nfunction test_invalid_prop_type() {\n    $test = new Test;\n    $test->x = \"\";\n}\nfunction test_invalid_prop_name(string $name) {\n    $test = new stdClass;\n    $test->$name = null;\n}\nfunction test_invalid_obj_type($c) {\n    if ($c) {\n        $test = new stdClass;\n    } else {\n        $test = null;\n    }\n    $test->x = \"\";\n}\ntry {\n    test_invalid_prop_type();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test_invalid_prop_name(\"\\0\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test_invalid_obj_type(false);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
