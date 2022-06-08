// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug66964.phpt
  it("Bug #66964 (mb_convert_variables() cannot detect recursion)", function () {
    expect(parser.parseCode("<?php\n$a[] = &$a;\nvar_dump(mb_convert_variables('utf-8', 'auto', $a));\nvar_dump(mb_convert_variables('utf-8', 'utf-8', $a));\nunset($a);\n$a[] = '日本語テキスト';\n$a[] = '日本語テキスト';\n$a[] = '日本語テキスト';\n$a[] = '日本語テキスト';\nvar_dump(mb_convert_variables('utf-8', 'utf-8', $a), $a);\n$a[] = &$a;\nvar_dump(mb_convert_variables('utf-8', 'utf-8', $a), $a);\n?>")).toMatchSnapshot();
  });
});
