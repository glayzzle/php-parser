// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/symtable_cache_recursive_dtor.phpt
  it("Symtable cache slots may be acquired while cleaning symtable", function () {
    expect(parser.parseCode("<?php\nclass A {\n    // Must be larger than the symtable cache.\n    static $max = 40;\n    function __destruct() {\n        if (self::$max-- < 0) return;\n        $x = 'y';\n        $$x = new a;\n    }\n}\nnew A;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
