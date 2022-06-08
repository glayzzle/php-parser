// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_getstandards_basic.phpt
  it("Basic UConverter::getStandards() usage", function () {
    expect(parser.parseCode("<?php\nfunction assertTrue($assertion, $msg) {\n    if (!$assertion) var_dump($msg);\n}\n$standards = UConverter::getStandards();\nassertTrue(is_array($standards), '$standards must be an array');\nassertTrue(count($standards) > 0, '$standards must not be empty');\nassertTrue($standards === array_values($standards), '$standards keys must be numeric');\nassertTrue($standards === array_unique($standards), '$standards values must be unique');\nassertTrue(array_reduce($standards, function($carry, $item) { return $carry && is_string($item); }, true), '$standards values must be strings');\n?>\n===DONE===")).toMatchSnapshot();
  });
});
