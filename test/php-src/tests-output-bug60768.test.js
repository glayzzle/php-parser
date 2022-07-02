// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/bug60768.phpt
  it("Bug #60768 Output buffer not discarded", function () {
    expect(parser.parseCode("<?php\nglobal $storage;\nob_start(function($buffer) use (&$storage) { $storage .= $buffer; }, 20);\necho str_repeat(\"0\", 20); // fill in the buffer\nfor($i = 0; $i < 10; $i++) {\n    echo str_pad($i, 9, ' ', STR_PAD_LEFT) . \"\\n\"; // full buffer dumped every time\n}\nob_end_flush();\nprintf(\"Output size: %d, expected %d\\n\", strlen($storage), 20 + 10 * 10);\n?>\nDONE")).toMatchSnapshot();
  });
});
