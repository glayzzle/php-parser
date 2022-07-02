// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78999.phpt
  it("Bug #78999 (Cycle leak when using function result as temporary)", function () {
    expect(parser.parseCode("<?php\nfunction get() {\n    $t = new stdClass;\n    $t->prop = $t;\n    return $t;\n}\nvar_dump(get());\nvar_dump(gc_collect_cycles());\n?>")).toMatchSnapshot();
  });
});
