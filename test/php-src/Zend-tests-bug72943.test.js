// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72943.phpt
  it("Bug #72943 (assign_dim on string doesn't reset hval)", function () {
    expect(parser.parseCode("<?php\n$array = array(\"test\" => 1);\n$a = \"lest\";\nvar_dump($array[$a]);\n$a[0] = \"f\";\nvar_dump($array[$a]);\n$a[0] = \"t\";\nvar_dump($array[$a]);\n?>")).toMatchSnapshot();
  });
});
