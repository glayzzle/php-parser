// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug44181.phpt
  it("Bug #44181 (extract EXTR_OVERWRITE|EXTR_REFS can fail to create references)", function () {
    expect(parser.parseCode("<?php\n$a = array('foo' => 'original.foo');\n$foo = 'test';\n$ref = &$a;\nextract($a, EXTR_OVERWRITE|EXTR_REFS);\n$foo = 'changed.foo';\nvar_dump($a['foo']);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
