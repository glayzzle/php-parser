// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_implicit_flush_basic_002.phpt
  it("Test ob_implicit_flush() function : ensure implicit flushing does not apply to user buffers.", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ob_implicit_flush() : ensure implicit flushing does not apply to user buffers. ***\\n\";\n// Start a user buffer\nob_start();\n// Switch on implicit flushing.\nob_implicit_flush(1);\necho \"This is being written to a user buffer.\\n\";\necho \"Note that even though implicit flushing is on, you should never see this,\\n\";\necho \"because implicit flushing affects only the top level buffer, not user buffers.\\n\";\n// Wipe the user buffer. Nothing should have been flushed.\nob_end_clean();\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
