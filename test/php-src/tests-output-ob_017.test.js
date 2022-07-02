// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/output/ob_017.phpt
  it("output buffering - statuses", function () {
    expect(parser.parseCode("<?php\n$statuses = array();\nfunction oh($str, $flags) {\n    global $statuses;\n    $statuses[] = \"$flags: $str\";\n    return $str;\n}\nob_start(\"oh\", 3);\necho \"yes\";\necho \"!\\n\";\nob_flush();\necho \"no\";\nob_clean();\necho \"yes!\\n\";\necho \"no\";\nob_end_clean();\nprint_r($statuses);\n?>")).toMatchSnapshot();
  });
});
