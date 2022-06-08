// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_typed_ref.phpt
  it("extract() into typed references must respect their type", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $i = 0;\n    public string $s = \"\";\n}\n$test = new Test;\n$i =& $test->i;\n$s =& $test->s;\ntry {\n    extract(['i' => 'foo', 's' => 42]);\n} catch (TypeError $e) { echo $e->getMessage(), \"\\n\"; }\nvar_dump($test->i, $test->s);\n?>")).toMatchSnapshot();
  });
});
