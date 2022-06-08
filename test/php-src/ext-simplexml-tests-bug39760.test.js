// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug39760.phpt
  it("Bug #39760 (cloning fails on nested SimpleXML-Object)", function () {
    expect(parser.parseCode("<?php\n$xml = '<?xml version=\"1.0\" ?>\n<test>\n    <level1>\n        <level2a>text1</level2a>\n        <level2b>text2</level2b>\n   </level1>\n</test>';\n$test = simplexml_load_string($xml);\nvar_dump($test->level1->level2a);\n$test2 = clone $test;\nvar_dump($test2->level1->level2a);\n$test3 = clone $test->level1->level2a;\nvar_dump($test3);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
