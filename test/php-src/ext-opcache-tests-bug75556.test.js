// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug75556.phpt
  it("Bug #75556 (Invalid opcode 138/1/1)", function () {
    expect(parser.parseCode("<?php\n function createFromFormat($format, $date, ?\\DateTimeZone $tz = null): ?\\DateTimeInterface\n {\n     if ($tz !== null\n             || ($tz instanceof \\DateTimeZone && !in_array($tz->getName(), ['UTC', 'Z'], true))\n        ) {\n         $msg = 'Date objects must have UTC as their timezone';\n         throw new \\UnexpectedValueException($msg);\n     }\n    return null;\n}\nvar_dump(createFromFormat('m/d/Y', '12/07/2017', null));\n?>")).toMatchSnapshot();
  });
});
