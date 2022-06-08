// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/objects_015.phpt
  it("comparing objects with strings/NULL", function () {
    expect(parser.parseCode("<?php\n$o=new stdClass;\nvar_dump($o == \"\");\nvar_dump($o != \"\");\nvar_dump($o <  \"\");\nvar_dump(\"\" <  $o);\nvar_dump(\"\" >  $o);\nvar_dump($o != null);\nvar_dump(is_null($o));\n?>")).toMatchSnapshot();
  });
});
