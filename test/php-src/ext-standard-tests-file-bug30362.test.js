// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug30362.phpt
  it("Bug #30362 (stream_get_line() not working as documented)", function () {
    expect(parser.parseCode("<?php\n$resource = fopen(__DIR__.'/bug30362.txt', 'rb');\nfor ($i = 0; ($i < 10) && !feof($resource); ++$i ) {\n    $a = \"Y\";\n    $line = stream_get_line($resource, 50, $a);\n    echo $line . \"\\n\";\n}\nfclose($resource);\n?>")).toMatchSnapshot();
  });
});
