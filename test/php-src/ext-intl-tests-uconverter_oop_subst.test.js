// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/uconverter_oop_subst.phpt
  it("Basic UConverter::convert() w/ Subsitution", function () {
    expect(parser.parseCode("<?php\n$c = new UConverter('ascii', 'utf-8');\nforeach(array('?','','<unknown>') as $subst) {\n  if (!$c->setSubstChars($subst)) {\n    echo \"**Disallowed\\n\";\n    continue;\n  }\n  var_dump($c->convert(\"This is an ascii string\"));\n  var_dump($c->convert(\"Snowman: (\\xE2\\x98\\x83)\"));\n}\n?>")).toMatchSnapshot();
  });
});
