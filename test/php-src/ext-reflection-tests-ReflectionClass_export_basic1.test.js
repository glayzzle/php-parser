// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_export_basic1.phpt
  it("ReflectionClass::__toString() - various parameters", function () {
    expect(parser.parseCode("<?php\nClass A {\n    public function privf(Exception $a) {}\n    public function pubf(A $a,\n                         $b,\n                         C $c = null,\n                         $d = K,\n                         $e = \"15 chars long -\",\n                         $f = null,\n                         $g = false,\n                         array $h = null) {}\n}\nClass C extends A { }\ndefine('K', \"16 chars long --\");\necho new ReflectionClass(\"C\"), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
