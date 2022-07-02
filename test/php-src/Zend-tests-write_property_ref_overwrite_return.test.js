// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/write_property_ref_overwrite_return.phpt
  it("Using return of property assignment to reference that destroys object", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass;\n$a->a =& $a;\nvar_dump($a->a = 0);\n?>")).toMatchSnapshot();
  });
});
