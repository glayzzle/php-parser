// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug71969.phpt
  it("Bug #71969 (str_replace returns an incorrect resulting array after a foreach by reference)", function () {
    expect(parser.parseCode("<?php\n$a = array(\n    array(\"one\" => array(\"a\"=>\"0000\", \"b\"=>\"1111\")),\n);\n//foreach by reference, changing the array value\nforeach($a as &$record)\n{\n    $record[\"one\"][\"a\"] = \"2222\";\n}\nvar_dump(str_replace(\"2\", \"3\", $a));\n?>")).toMatchSnapshot();
  });
});
