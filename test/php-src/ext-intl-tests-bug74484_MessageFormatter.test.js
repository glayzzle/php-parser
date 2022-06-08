// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug74484_MessageFormatter.phpt
  it("Bug #74484 MessageFormatter::formatMessage memory corruption with 11+ named placeholder", function () {
    expect(parser.parseCode("<?php\n$text = \"{a} {b} {c} {d} {e} {f} {g} {h} {i} {j} {k} {l}\";\n$vars = array(\n  'a' => 1,\n  'b' => 2,\n  'c' => 3,\n  'd' => 4,\n  'e' => 5,\n  'f' => 6,\n  'g' => 7,\n  'h' => 8,\n  'i' => 9,\n  'j' => 10,\n  'k' => 11,\n  'l' => 12\n);\nvar_dump(MessageFormatter::formatMessage('en_US', $text, $vars));\n?>")).toMatchSnapshot();
  });
});
