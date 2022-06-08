// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug48601.phpt
  it("Bug #48601 (xpath() returns FALSE for legitimate query)", function () {
    expect(parser.parseCode("<?php\n$sxe = simplexml_load_string('<root><node1>1</node1></root>');\n$nodes = $sxe->xpath(\"/root/node2/@test\");\nif (! is_array($nodes)) {\n    echo \"An error occurred\\n\";\n} else {\n   echo \"Result Count: \" . count($nodes) . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
