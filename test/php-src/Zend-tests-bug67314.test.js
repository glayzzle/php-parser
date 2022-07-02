// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67314.phpt
  it("Bug #67314 (Segmentation fault in gc_remove_zval_from_buffer)", function () {
    expect(parser.parseCode("<?php\nfunction crash()\n{\n    $notDefined[$i] = 'test';\n}\nfunction error_handler() { return false; }\nset_error_handler('error_handler');\ncrash();\necho \"made it once\\n\";\ncrash();\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
