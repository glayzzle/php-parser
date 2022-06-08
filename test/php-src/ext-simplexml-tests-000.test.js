// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/000.phpt
  it("SimpleXML: var_dump()", function () {
    expect(parser.parseCode("<?php\n$sxe = simplexml_load_file(__DIR__.'/000.xml');\nfunction test($what)\n{\n    global $sxe;\n    echo \"===$what\\n\";\n    eval(\"var_dump(isset(\\$$what));\");\n    eval(\"var_dump((bool)\\$$what);\");\n    eval(\"if (isset(\\$$what)) var_dump(count(\\$$what));\");\n    eval(\"var_dump(\\$$what);\");\n}\ntest('sxe');\ntest('sxe->elem1');\ntest('sxe->elem1[0]');\ntest('sxe->elem1[0]->elem2');\ntest('sxe->elem1[0]->elem2->bla');\ntest('sxe->elem1[0][\"attr1\"]');\ntest('sxe->elem1[0]->attr1');\ntest('sxe->elem1[1]');\ntest('sxe->elem1[2]');\ntest('sxe->elem11');\ntest('sxe->elem11->elem111');\ntest('sxe->elem11->elem111->elem1111');\ntest('sxe->elem22');\ntest('sxe->elem22->elem222');\ntest('sxe->elem22->attr22');\ntest('sxe->elem22[\"attr22\"]');\n?>")).toMatchSnapshot();
  });
});
