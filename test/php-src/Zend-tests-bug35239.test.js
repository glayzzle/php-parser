// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug35239.phpt
  it("Bug #35239 (Objects can lose references)", function () {
    expect(parser.parseCode("<?php\n$a = new stdClass;\n$a->x0 = new stdClass;\n$a->x0->y0 = 'a';\n$a->x0->y1 =& $a->x0;\n$a->x0->y2 =& $a->x0;\n$a->x0->y0 = 'b';\nvar_dump($a);\n$a->x0->y1 = \"ok\\n\";\necho $a->x0;\n?>")).toMatchSnapshot();
  });
});
