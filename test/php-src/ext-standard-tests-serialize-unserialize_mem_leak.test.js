// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/unserialize_mem_leak.phpt
  it("Memleaks if unserialize return a self-referenced array/object", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    gc_collect_cycles();\n}\n$str = 'a:1:{i:0;R:1;}';\nfoo(unserialize($str));\n$str = 'a:1:{i:0;r:1;}';\nfoo(unserialize($str));\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
