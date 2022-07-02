// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialize_globals_var_refs.phpt
  it("Reference IDs should be correctly generated when $GLOBALS is serialized", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass;\n$obj2 = new stdClass;\n$obj2->obj = $obj;\n$s = serialize($GLOBALS);\n$globals = unserialize($s);\nvar_dump($obj);\nvar_dump($obj2);\n?>")).toMatchSnapshot();
  });
});
