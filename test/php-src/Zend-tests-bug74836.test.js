// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug74836.phpt
  it("Bug #74836 (isset on zero-prefixed numeric indexes in array broken)", function () {
    expect(parser.parseCode("<?php\n$s = \"1234567890a\";\n$a[10] = \"42\";\n$i = \"010\";\nvar_dump($s[\"10\"], isset($s[\"10\"]));\nvar_dump($s[\"010\"], isset($s[\"010\"]));\nvar_dump($s[$i], isset($s[$i]));\nvar_dump($a[\"10\"], isset($a[\"10\"]));\nvar_dump($a[\"010\"], isset($a[\"010\"]));\nvar_dump($a[$i], isset($a[$i]));\n?>")).toMatchSnapshot();
  });
});
