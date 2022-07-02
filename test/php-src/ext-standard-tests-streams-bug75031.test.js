// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug75031.phpt
  it("Bug #75031: Append mode in php://temp and php://memory", function () {
    expect(parser.parseCode("<?php\nfunction test_75031($type, $mode) {\n    $fp = fopen($type, $mode);\n    fwrite($fp, \"hello\");\n    fseek($fp, 0, SEEK_SET);\n    fwrite($fp, \"world\");\n    var_dump(stream_get_contents($fp, -1, 0));\n    fclose($fp);\n}\ntest_75031(\"php://temp\", \"w+\");\ntest_75031(\"php://memory\", \"w+\");\ntest_75031(\"php://temp\", \"a+\");\ntest_75031(\"php://memory\", \"a+\");\n?>")).toMatchSnapshot();
  });
});
