// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplObjectStorage_unserialize_nested.phpt
  it("SPL: Test unserializing tested & linked storage", function () {
    expect(parser.parseCode("<?php\n$o = new StdClass();\n$a = new StdClass();\n$o->a = $a;\n$so = new SplObjectStorage();\n$so[$o] = 1;\n$so[$a] = 2;\n$s = serialize($so);\necho $s.\"\\n\";\n$so1 = unserialize($s);\nvar_dump($so1);\n?>")).toMatchSnapshot();
  });
});
