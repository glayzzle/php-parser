// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug34214.phpt
  it("Bug #34214 (base64_decode() does not properly ignore whitespace)", function () {
    expect(parser.parseCode("<?php\n$txt = 'Zm9vYmFyIG\n Zvb2Jhcg==';\necho base64_decode($txt), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
