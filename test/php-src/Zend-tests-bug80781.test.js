// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80781.phpt
  it("Bug #80781: Error handler that throws ErrorException infinite loop", function () {
    expect(parser.parseCode("<?php\nfunction handle(int $severity, string $message, string $file, int $line): bool {\n\tif((error_reporting() & $severity) !== 0) {\n\t\tthrow new \\ErrorException($message, 0, $severity, $file, $line);\n\t}\n\treturn true; // stfu operator\n}\nset_error_handler('handle');\nfunction getPlugin(string $plugin) : bool{\n\treturn false;\n}\n$data = [];\n$array = [];\nif (isset($array[$data]) or getPlugin($data)) {\n}\n?>")).toMatchSnapshot();
  });
});
