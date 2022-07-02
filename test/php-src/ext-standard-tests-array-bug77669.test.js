// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug77669.phpt
  it("Bug #77669: Crash in extract() when overwriting extracted array", function () {
    expect(parser.parseCode("<?php\nfunction test($mode) {\n    $foo = [];\n    $foo[\"foo\"] = 42;\n    $foo[\"bar\"] = 24;\n    extract($foo, $mode, \"\");\n    $prefix_foo = [];\n    $prefix_foo[\"foo\"] = 42;\n    $prefix_foo[\"bar\"] = 24;\n    extract($prefix_foo, $mode, \"prefix\");\n}\ntest(EXTR_OVERWRITE);\ntest(EXTR_SKIP);\ntest(EXTR_IF_EXISTS);\ntest(EXTR_PREFIX_SAME);\ntest(EXTR_PREFIX_ALL);\ntest(EXTR_PREFIX_INVALID);\ntest(EXTR_PREFIX_IF_EXISTS);\ntest(EXTR_REFS | EXTR_OVERWRITE);\ntest(EXTR_REFS | EXTR_SKIP);\ntest(EXTR_REFS | EXTR_IF_EXISTS);\ntest(EXTR_REFS | EXTR_PREFIX_SAME);\ntest(EXTR_REFS | EXTR_PREFIX_ALL);\ntest(EXTR_REFS | EXTR_PREFIX_INVALID);\ntest(EXTR_REFS | EXTR_PREFIX_IF_EXISTS);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
