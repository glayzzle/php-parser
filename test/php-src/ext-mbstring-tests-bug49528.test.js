// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug49528.phpt
  it("Bug #49528 (UTF-16 strings prefixed by BOM wrongly converted)", function () {
    expect(parser.parseCode("<?php\nvar_dump(bin2hex(mb_convert_encoding(\"\\xff\\xfe\\x01\\x02\\x03\\x04\", \"UCS-2BE\", \"UTF-16\")));\nvar_dump(bin2hex(mb_convert_encoding(\"\\xfe\\xff\\x01\\x02\\x03\\x04\", \"UCS-2BE\", \"UTF-16\")));\nvar_dump(bin2hex(mb_convert_encoding(\"\\xff\\xfe\\xff\\xfe\\x01\\x02\\x03\\x04\", \"UCS-2BE\", \"UTF-16\")));\nvar_dump(bin2hex(mb_convert_encoding(\"\\xff\\xfe\\xfe\\xff\\x01\\x02\\x03\\x04\", \"UCS-2BE\", \"UTF-16\")));\nvar_dump(bin2hex(mb_convert_encoding(\"\\xfe\\xff\\xff\\xfe\\x01\\x02\\x03\\x04\", \"UCS-2BE\", \"UTF-16\")));\nvar_dump(bin2hex(mb_convert_encoding(\"\\xfe\\xff\\xfe\\xff\\x01\\x02\\x03\\x04\", \"UCS-2BE\", \"UTF-16\")));\n?>")).toMatchSnapshot();
  });
});
