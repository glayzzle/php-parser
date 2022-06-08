// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug69144.phpt
  it("Bug #69144 (strtr not replacing with partly matching replace pairs)", function () {
    expect(parser.parseCode("<?php\n$tests = array('bar' => '', 'foo' => 'o', 'foobar' => '', 'hello' => 'hello');\nforeach ($tests as $input => $expected) {\n    if ($expected !== ($actual = strtr($input, array(\"fo\" => \"\", \"foobar\" => \"\", \"bar\" => \"\")))) {\n        echo \"KO `$input` became `$actual` instead of `$expected`\\n\";\n    }\n}\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
