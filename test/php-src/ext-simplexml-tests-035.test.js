// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/035.phpt
  it("SimpleXML: __toString", function () {
    expect(parser.parseCode("<?php\n$string = '<?xml version=\"1.0\"?>\n<foo><bar>\n   <p>Blah 1</p>\n   <p>Blah 2</p>\n   <p>Blah 3</p>\n   <tt>Blah 4</tt>\n</bar></foo>\n';\n$foo = simplexml_load_string($string);\n$p = $foo->bar->p;\necho $p.\"\\n\";\necho $p->__toString().\"\\n\";\necho $p.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
