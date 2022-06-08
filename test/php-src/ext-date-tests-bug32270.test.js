// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug32270.phpt
  it("Bug #32270 (strtotime/date behavior)", function () {
    expect(parser.parseCode("<?php\necho date(\"m/d/Y H:i:s T\", -2145888000).\"\\n\";\necho strtotime(\"Jan 1 1902\").\"\\n\";\necho date(\"m/d/Y H:i:s T\", -631123200).\"\\n\";\necho strtotime(\"Jan 1 1950\").\"\\n\";\necho date(\"m/d/Y H:i:s T\", 946713600).\"\\n\";\necho strtotime(\"Jan 1 2000\").\"\\n\";\n?>")).toMatchSnapshot();
  });
});
