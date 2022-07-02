// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29883.phpt
  it("Bug #29883 (isset gives invalid values on strings)", function () {
    expect(parser.parseCode("<?php\n$x = \"bug\";\nvar_dump(isset($x[-10]));\nvar_dump(isset($x[1]));\nvar_dump(isset($x[\"1\"]));\nvar_dump($x[-10]).\"\\n\";\nvar_dump($x[1]).\"\\n\";\nvar_dump($x[\"1\"]).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
