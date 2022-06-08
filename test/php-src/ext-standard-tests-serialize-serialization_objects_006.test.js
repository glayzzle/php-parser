// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/serialization_objects_006.phpt
  it("Behaviour of incomplete class is preserved even when it was not created by unserialize().", function () {
    expect(parser.parseCode("<?php\n$a = new __PHP_Incomplete_Class;\nvar_dump($a);\nvar_dump($a->p);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
