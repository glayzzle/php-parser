// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/streams/bug78326.phpt
  it("memory allocation on stream_get_contents()", function () {
    expect(parser.parseCode("<?php\n$f = tmpfile();\nfwrite($f, '.');\n$chunks = array();\nfor ($i = 0; $i < 1000; ++$i) {\n    rewind($f);\n    $chunks[] = stream_get_contents($f, 1000000);\n}\nvar_dump(count($chunks));\n?>")).toMatchSnapshot();
  });
});
