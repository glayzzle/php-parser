// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation54.phpt
  it("sprintf() formats with different types", function () {
    expect(parser.parseCode("<?php\n$formats = ['s', 'd', 'u', 'f', 'c', 'x'];\n$values = [null, false, true, 2, 3.5, \"foo\", [], [1], fopen(__FILE__, \"r\"), new stdClass];\nforeach ($formats as $format) {\n    foreach ($values as $value) {\n        echo \"$format with \" . (is_resource($value) ? \"resource\" : json_encode($value)) . \":\\n\";\n        try {\n            echo sprintf(\"%\" . $format, $value), \"\\n\";\n        } catch (Error $e) {\n            echo $e->getMessage(), \"\\n\";\n        }\n        echo \"\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
