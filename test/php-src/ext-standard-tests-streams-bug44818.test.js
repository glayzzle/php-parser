// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug44818.phpt
  it("Bug #44818 (php://memory writeable when opened read only)", function () {
    expect(parser.parseCode("<?php\nfunction test($url, $mode) {\n    echo \"$url, $mode\\n\";\n    $fd = fopen($url, $mode);\n    var_dump($fd, fwrite($fd, \"foo\"));\n    var_dump(fseek($fd, 0, SEEK_SET), fread($fd, 3));\n    fclose($fd);\n}\ntest(\"php://memory\",\"r\");\ntest(\"php://memory\",\"r+\");\ntest(\"php://temp\",\"r\");\ntest(\"php://temp\",\"w\");\n?>")).toMatchSnapshot();
  });
});
