// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/by_ref_foreach.phpt
  it("By-ref foreach over readonly property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public readonly int $prop;\n    public function init() {\n        $this->prop = 1;\n    }\n}\n$test = new Test;\n// Okay, as foreach skips over uninitialized properties.\nforeach ($test as &$prop) {}\n$test->init();\ntry {\n    foreach ($test as &$prop) {}\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
