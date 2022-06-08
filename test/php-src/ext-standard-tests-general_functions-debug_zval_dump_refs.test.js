// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/debug_zval_dump_refs.phpt
  it("References in debug_zval_dump()", function () {
    expect(parser.parseCode("<?php\n$r = 1;\n$a = [&$r];\ndebug_zval_dump($a);\n$a[] =& $r;\ndebug_zval_dump($a);\nunset($a[1]);\ndebug_zval_dump($a);\nunset($r);\n// rc=1 singleton ref remains\ndebug_zval_dump($a);\n?>")).toMatchSnapshot();
  });
});
