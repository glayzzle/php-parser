// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug71028.phpt
  it("Bug #71028 (Undefined index with ArrayIterator)", function () {
    expect(parser.parseCode("<?php\nfunction cast(&$a) {\n        $a = (int)$a;\n}\n$a = new ArrayIterator;\n$a[-1] = 123;\n$b = \"-1\";\ncast($b);\nvar_dump(isset($a[$b]));\n$a[$b] = \"okey\";\nvar_dump($a[$b]);\nunset($a[$b]);\nvar_dump(isset($a[$b]));\n?>")).toMatchSnapshot();
  });
});
