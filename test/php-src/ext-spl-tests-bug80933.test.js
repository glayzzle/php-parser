// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug80933.phpt
  it("Bug #80933 (SplFileObject::DROP_NEW_LINE is broken for NUL and CR)", function () {
    expect(parser.parseCode("<?php\n$lines = [\n    \"Lorem ipsum \\0 dolor sit amet\", // string with NUL\n    \"Lorem ipsum \\r dolor sit amet\", // string with CR\n];\nforeach ($lines as $line) {\n    $temp = new SplTempFileObject();\n    $temp->fwrite($line);\n    $temp->rewind();\n    $read = $temp->fgets();\n    var_dump($line === $read);\n    $temp->rewind();\n    $temp->setFlags(SplFileObject::DROP_NEW_LINE);\n    $read = $temp->fgets();\n    var_dump($line === $read);\n}\n?>")).toMatchSnapshot();
  });
});
