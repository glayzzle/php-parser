// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_keyed_non_literals.phpt
  it("list() with constant keys", function () {
    expect(parser.parseCode("<?php\n$arr = [\n    1 => \"one\",\n    2 => \"two\",\n    3 => \"three\"\n];\nconst COMPILE_TIME_RESOLVABLE = 1;\ndefine('PROBABLY_NOT_COMPILE_TIME_RESOLVABLE', file_get_contents(\"data:text/plain,2\"));\n$probablyNotCompileTimeResolvable3 = cos(0) * 3;\nlist(\n    COMPILE_TIME_RESOLVABLE => $one,\n    PROBABLY_NOT_COMPILE_TIME_RESOLVABLE => $two,\n    $probablyNotCompileTimeResolvable3 => $three\n) = $arr;\nvar_dump($one, $two, $three);\n?>")).toMatchSnapshot();
  });
});
