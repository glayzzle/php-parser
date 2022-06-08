// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/settype_typed_property.phpt
  it("Using settype() on a typed property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $x;\n}\n$test = new Test;\n$test->x = 42;\nsettype($test->x, 'string');\n// Same as $test->x = (string) $test->x.\n// Leaves value unchanged due to coercion\nvar_dump($test->x);\ntry {\n    settype($test->x, 'array');\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test->x);\n?>")).toMatchSnapshot();
  });
});
