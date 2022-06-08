// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/bug67250.phpt
  it("Bug #67250 (iptcparse out-of-bounds read)", function () {
    expect(parser.parseCode("<?php\nvar_dump(iptcparse(\"\\x1C\\x02_\\x80___\"));\n?>")).toMatchSnapshot();
  });
});
