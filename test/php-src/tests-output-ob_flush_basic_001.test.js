// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_flush_basic_001.phpt
  it("Test ob_flush() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ob_flush() : basic functionality ***\\n\";\n// Zero arguments\necho \"\\n-- Testing ob_flush() function with Zero arguments --\\n\";\nvar_dump(ob_flush());\nob_start();\necho \"This should get flushed.\\n\";\nvar_dump(ob_flush());\necho \"Ensure the buffer is still active after the flush.\\n\";\n$out = ob_flush();\nvar_dump($out);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
