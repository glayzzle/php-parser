// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug49263.phpt
  it("SPL: SplObjectStorage serialization references", function () {
    expect(parser.parseCode("<?php\n$o1 = new stdClass;\n$o2 = new stdClass;\n$s = new splObjectStorage();\n$s->attach($o1, array('prev' => 2, 'next' => $o2));\n$s->attach($o2, array('prev' => $o1));\n$ss = serialize($s);\nunset($s,$o1,$o2);\necho $ss.\"\\n\";\nvar_dump(unserialize($ss));\n?>")).toMatchSnapshot();
  });
});
