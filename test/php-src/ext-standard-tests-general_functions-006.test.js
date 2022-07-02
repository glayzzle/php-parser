// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/006.phpt
  it("quoted_printable_decode() function test with CR/LF", function () {
    expect(parser.parseCode("<?php echo quoted_printable_decode(\"=FAwow-factor=C1=D0=D5=DD=C5=CE=CE=D9=C5=0A=\n=20=D4=CF=D2=C7=CF=D7=D9=C5=\n=20=\n=D0=\n=D2=CF=C5=CB=D4=D9\"); ?>")).toMatchSnapshot();
  });
});
