// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63055.phpt
  it("Bug #63055 (Segfault in zend_gc with SF2 testsuite)", function () {
    expect(parser.parseCode("<?php\n/* the default gc root size is 10,000 */\nfor ($i=0; $i<9998; $i++) {\n    $array = array();\n    $array[0] = &$array;\n    unset($array);\n}\n$matches = array(\"foo\" => \"bar\"); /* this bucket will trigger the segfault */\n$dummy   = array(\"dummy\");        /* used to trigger gc_collect_cycles */\n$dummy[1] = &$dummy;\n$matches[1] = &$matches;\n$matches[2] = $dummy;\nstr_replace(\"foo\", \"bar\", \"foobar\", $matches);\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
