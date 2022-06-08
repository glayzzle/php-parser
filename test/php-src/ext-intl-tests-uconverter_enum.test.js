// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_enum.phpt
  it("UConverter Enumerations", function () {
    expect(parser.parseCode("<?php\n$avail = UConverter::getAvailable();\nvar_dump(count($avail) > 100);\nvar_dump(in_array('UTF-7', $avail));\nvar_dump(in_array('CESU-8', $avail));\nvar_dump(in_array('ISO-8859-1', $avail));\n$latin1 = UConverter::getAliases('latin1');\nvar_dump(in_array('ISO-8859-1', $latin1));\n?>")).toMatchSnapshot();
  });
});
