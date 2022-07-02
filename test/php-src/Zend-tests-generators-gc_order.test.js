// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/gc_order.phpt
  it("Close generator in dtor to avoid freeing order issues", function () {
    expect(parser.parseCode("<?php\n$gen = function() {\n    yield;\n    throw new Exception; // Just to create a live range\n};\n$a = new stdclass;\n$a->a = $a;\n$a->gen = $gen();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
