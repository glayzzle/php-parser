// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/ArrayObject_std_props_no_recursion.phpt
  it("Don't recurse into USE_OTHER when checking for STD_PROP_LIST", function () {
    expect(parser.parseCode("<?php\n$a = new ArrayObject([1, 2, 3], ArrayObject::STD_PROP_LIST);\n$a->prop = 'a';\n$b = new ArrayObject($a, 0);\n$b->prop = 'b';\nvar_dump((array) $b);\n$c = new ArrayObject($a);\n$c->prop = 'c';\nvar_dump((array) $c);\n?>")).toMatchSnapshot();
  });
});
