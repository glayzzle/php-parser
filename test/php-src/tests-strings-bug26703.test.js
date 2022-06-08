// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/strings/bug26703.phpt
  it("Bug #26703 (Certain characters inside strings incorrectly treated as keywords)", function () {
    expect(parser.parseCode("<?php\n    highlight_string('<?php echo \"foo[] $a \\n\"; ?>');\n?>")).toMatchSnapshot();
  });
});
