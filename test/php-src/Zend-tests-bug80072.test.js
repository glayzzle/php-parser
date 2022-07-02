// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80072.phpt
  it("Bug #80072: Cyclic unserialize in TMPVAR operand may leak", function () {
    expect(parser.parseCode("<?php\ntry {\n    $s = 'O:8:\"stdClass\":1:{s:1:\"x\";r:1;}';\n    unserialize($s) % gc_collect_cycles();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$a[]=&$a == $a=&$b > gc_collect_cycles();\n?>")).toMatchSnapshot();
  });
});
