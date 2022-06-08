// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug42369.phpt
  it("Bug #42369 (Implicit conversion to string leaks memory)", function () {
    expect(parser.parseCode("<?php\n    $xml = '<?xml version=\"1.0\" encoding=\"utf-8\"?>';\n    $x = simplexml_load_string($xml . \"<q><x>foo</x></q>\");\n    echo 'explicit conversion' . PHP_EOL;\n    for ($i = 0; $i < 100000; $i++) {\n        md5(strval($x->x));\n    }\n    echo 'no conversion' . PHP_EOL;\n    for ($i = 0; $i < 100000; $i++) {\n        md5($x->x);\n    }\n?>")).toMatchSnapshot();
  });
});
