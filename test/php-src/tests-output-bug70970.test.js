// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/bug70970.phpt
  it("Bug #70970 (Segfault when combining error handler with output buffering)", function () {
    expect(parser.parseCode("<?php\nfunction exception_error_handler($severity, $message, $file, $line)\n{\n    throw new Exception($message, 0);\n}\nset_error_handler('exception_error_handler');\nfunction obHandler($buffer, $phase = null)\n{\n    try {\n        ob_start();\n    } catch (Exception $e) {\n        return (string) $e;\n    }\n    return $buffer;\n}\nob_start('obHandler');\nprint 'test';\n?>")).toMatchSnapshot();
  });
});
