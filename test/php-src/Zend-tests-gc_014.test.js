// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_014.phpt
  it("GC 014: Too many cycles in one object", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass();\nfor ($i = 0; $i < 10001; $i++) {\n    $b =& $a;\n    $a->{\"a\".$i} = $a;\n}\nunset($b);\n$a->b = \"xxx\";\nunset($a);\nvar_dump(gc_collect_cycles() > 0);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
