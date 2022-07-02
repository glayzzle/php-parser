// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/quoted_printable_decode_basic.phpt
  it("Test quoted_printable_decode() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing quoted_printable_decode() : basic functionality ***\\n\";\n$str = \"=FAwow-factor=C1=d0=D5=DD=C5=CE=CE=D9=C5=0A=\n=20=D4=cf=D2=C7=CF=D7=D9=C5=\n=20=\n=D0=\n=D2=CF=C5=CB=D4=D9\";\nvar_dump(bin2hex(quoted_printable_decode($str)));\n?>")).toMatchSnapshot();
  });
});
