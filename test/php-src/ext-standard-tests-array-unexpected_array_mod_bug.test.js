// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/unexpected_array_mod_bug.phpt
  it("Crash when function parameter modified via reference", function () {
    expect(parser.parseCode("<?php\nfunction usercompare($a,$b) {\n  unset($GLOBALS['my_var'][2]);\n  return $a <=> $b;\n}\n$my_var = array(1 => \"entry_1\",\n2 => \"entry_2\",\n3 => \"entry_3\",\n4 => \"entry_4\",\n5 => \"entry_5\");\nusort($my_var, \"usercompare\");\nvar_dump($my_var);\n?>")).toMatchSnapshot();
  });
});
