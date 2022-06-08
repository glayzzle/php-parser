// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug44654.phpt
  it("Bug #44654 (syntax error for #)", function () {
    expect(parser.parseCode("#<?php echo 1; ?>\n<?php if (1) { ?>#<?php } ?>\n#<?php echo 1; ?>")).toMatchSnapshot();
  });
});
