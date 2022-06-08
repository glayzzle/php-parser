// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug70452.phpt
  it("Bug #70452 string IntlChar::charName() can sometimes return bool(false)", function () {
    expect(parser.parseCode("<?php\n// Rely on the default value for the second parameter\nvar_dump(IntlChar::charName(\"A\"));\n// Provide a valid option for the second parameter\nvar_dump(IntlChar::charName(\"A\", IntlChar::UNICODE_CHAR_NAME));\n// Another valid option, but with no corresponding name for that given option\n// This properly returns an empty string, as expected\nvar_dump(IntlChar::charName(\"A\", IntlChar::UNICODE_10_CHAR_NAME));\n// Provide an invalid value for the second parameter\nvar_dump(IntlChar::charName(\"A\", 12345));\n?>")).toMatchSnapshot();
  });
});
