// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug44182.phpt
  it("Bug #44182 (extract EXTR_REFS can fail to split copy-on-write references)", function () {
    expect(parser.parseCode("<?php\n$a = array('foo' => 'original.foo');\n$nonref = $a['foo'];\n$ref = &$a;\nextract($a, EXTR_REFS);\n$a['foo'] = 'changed.foo';\nvar_dump($nonref);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
