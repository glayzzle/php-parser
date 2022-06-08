// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_convert_case_various_mode.phpt
  it("Calling mb_convert_case() with an invalid casing mode", function () {
    expect(parser.parseCode("<?php\nvar_dump(mb_convert_case('foo BAR Spaß', MB_CASE_UPPER));\nvar_dump(mb_convert_case('foo BAR Spaß', MB_CASE_LOWER));\nvar_dump(mb_convert_case('foo BAR Spaß', MB_CASE_TITLE));\nvar_dump(mb_convert_case('foo BAR Spaß', MB_CASE_FOLD));\nvar_dump(mb_convert_case('foo BAR Spaß', MB_CASE_UPPER_SIMPLE));\nvar_dump(mb_convert_case('foo BAR Spaß', MB_CASE_LOWER_SIMPLE));\nvar_dump(mb_convert_case('foo BAR Spaß', MB_CASE_TITLE_SIMPLE));\nvar_dump(mb_convert_case('foo BAR Spaß', MB_CASE_FOLD_SIMPLE));\n// Invalid mode\ntry {\n    var_dump(mb_convert_case('foo BAR Spaß', 100));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
