// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/idn.phpt
  it("IDN", function () {
    expect(parser.parseCode("<?php\n/*\n * Test IDN functions (procedural only)\n */\necho idn_to_ascii(\"t\\xC3\\xA4st.de\").\"\\n\";\necho urlencode(idn_to_utf8('xn--tst-qla.de')).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
