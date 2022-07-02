// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_042.phpt
  it("Object properties HT may need to be removed from nested data", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __destruct() {\n        $GLOBALS['x'] = $this;\n    }\n}\n$t = new Test;\n$t->x = new stdClass;\n$t->x->t = $t;\n$a = (array) $t->x;\nunset($t, $a);\ngc_collect_cycles();\nvar_dump($x);\n?>")).toMatchSnapshot();
  });
});
