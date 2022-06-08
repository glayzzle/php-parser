// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug46843.phpt
  it("Bug #46843 (CP936 euro symbol is not converted properly)", function () {
    expect(parser.parseCode("<?php\nvar_dump(bin2hex(mb_convert_encoding(\"\\x80\", 'UCS-2BE', 'CP936')));\nvar_dump(bin2hex(mb_convert_encoding(\"\\x20\\xac\", 'CP936', 'UCS-2BE')));\n?>")).toMatchSnapshot();
  });
});
