// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug62017.phpt
  it("Bug #62017: datefmt_create with incorrectly encoded timezone leaks pattern", function () {
    expect(parser.parseCode("<?php\nini_set('intl.error_level', E_WARNING);\nvar_dump(\n    datefmt_create('', IntlDateFormatter::NONE, IntlDateFormatter::NONE, \"\\xFF\",\n        IntlDateFormatter::GREGORIAN, 'a'));\ntry {\n    var_dump(\n        new IntlDateFormatter('', IntlDateFormatter::NONE, IntlDateFormatter::NONE, \"Europe/Lisbon\",\n            IntlDateFormatter::GREGORIAN, \"\\x80\"));\n} catch (IntlException $e) {\n    echo PHP_EOL.\"Exception: \" . $e->getMessage() . \" in \" . $e->getFile() . \" on line \" . $e->getLine() . PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
