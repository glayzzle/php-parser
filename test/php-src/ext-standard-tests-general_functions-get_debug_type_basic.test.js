// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/get_debug_type_basic.phpt
  it("Test get_debug_type() class reading", function () {
    expect(parser.parseCode("<?php\nnamespace Demo {\n    class ClassInNamespace {\n    }\n}\nnamespace {\n    class ClassInGlobal { }\n    class ToBeExtended {  }\n    interface ToBeImplemented { }\n    $fp = fopen(__FILE__, 'r');\n    $fp_closed = fopen(__FILE__, 'r');\n    fclose($fp_closed);\n    /* tests against an object type */\n    echo get_debug_type(new ClassInGlobal()) . \"\\n\";\n    echo get_debug_type(new Demo\\ClassInNamespace()) . \"\\n\";\n    echo get_debug_type(new class {}) . \"\\n\";\n    echo get_debug_type(new class extends ToBeExtended {}) . \"\\n\";\n    echo get_debug_type(new class implements ToBeImplemented {}) . \"\\n\";\n    /* scalars */\n    echo get_debug_type(\"foo\") . \"\\n\";\n    echo get_debug_type(false) . \"\\n\";\n    echo get_debug_type(true) . \"\\n\";\n    echo get_debug_type(1) . \"\\n\";\n    echo get_debug_type(1.1) . \"\\n\";\n    echo get_debug_type([]) . \"\\n\";\n    echo get_debug_type(null) . \"\\n\";\n    echo get_debug_type($fp) . \"\\n\";\n    echo get_debug_type($fp_closed) . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
