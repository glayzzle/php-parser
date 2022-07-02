// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug44929.phpt
  it("Bug #44929 (natsort doesn't handle leading zeros well)", function () {
    expect(parser.parseCode("<?php\n$a = array('001','008','005','00011','03','000014','-123','0.002','00','0','0_0','0-0');\nnatsort($a);\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
