// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug74183.phpt
  it("Bug #74183 - preg_last_error not returning error code after error", function () {
    expect(parser.parseCode("<?php\n$sRegex = \"/([A-Z]|[a-z]|[0-9]| |Ñ|ñ|!|&quot;|%|&amp;|'|´|-|:|;|>|=|&lt;|@|_|,|\\{|\\}|`|~|á|é|í|ó|ú|Á|É|Í|Ó|Ú|ü|Ü){1,300}/\";\n$sTest = \"Hello world\";\nvar_dump(preg_match($sRegex, $sTest));\nvar_dump(preg_last_error() === \\PREG_INTERNAL_ERROR);\n?>")).toMatchSnapshot();
  });
});
