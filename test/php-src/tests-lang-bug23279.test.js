// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug23279.phpt
  it("Bug #23279 (exception handler stops after first function call)", function () {
    expect(parser.parseCode("<?php\nob_start();\nset_exception_handler('redirect_on_error');\necho \"Hello World\\n\";\nthrow new Exception;\nfunction redirect_on_error($e) {\n    ob_end_clean();\n    echo \"Goodbye Cruel World\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
