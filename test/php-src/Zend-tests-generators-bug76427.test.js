// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/bug76427.phpt
  it("Bug #76427 (Segfault in zend_objects_store_put)", function () {
    expect(parser.parseCode("<?php\n$func = function () {\n    yield 2;\n};\n$a  = new stdclass();\n$b =  new stdclass();\n$a->b = $b;\n$b->a = $a;\n$func = $a->func = $func();\nunset($b);\nunset($a);\nunset($func);\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
