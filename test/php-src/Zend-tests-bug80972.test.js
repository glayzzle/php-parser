// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug80972.phpt
  it("Bug #80972: Memory exhaustion on invalid string offset", function () {
    expect(parser.parseCode("<?php\nfunction exceptions_error_handler($severity, $message, $filename, $lineno) {\n    if (error_reporting() & $severity) {\n        throw new ErrorException($message, 0, $severity, $filename, $lineno);\n    }\n}\nset_error_handler('exceptions_error_handler');\n$float = 10e120;\n$string_float = (string) $float;\n$string = 'Here is some text for good measure';\ntry {\n    echo 'Float casted to string compile', \\PHP_EOL;\n    $string[(string) 10e120] = 'E';\n    var_dump($string);\n} catch (\\TypeError $e) {\n    echo $e->getMessage(), \\PHP_EOL;\n}\n/* This same bug also permits to modify the first byte of a string even if\n * the offset is invalid */\ntry {\n    /* This must not affect the string value */\n    $string[\"wrong\"] = \"f\";\n} catch (\\Throwable $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($string);\n?>")).toMatchSnapshot();
  });
});
