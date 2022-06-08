// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug62978.phpt
  it("Bug #62987 (Assigning to ArrayObject[null][something] overrides all undefined variables)", function () {
    expect(parser.parseCode("<?php\n$a = new ArrayObject();\n$b = array();\n$a[null]['hurr'] = 'durr';\nvar_dump($a['epic_magic']);\nvar_dump($b['epic_magic']);\nvar_dump($c['epic_magic']); // Undefined var!!\n$d = array();\nvar_dump($a['epic_magic']); // more magic!\nvar_dump($d['epic_magic']);\n$e = 'srsly?';\nvar_dump($a['epic_magic']); // srsly.\nvar_dump(isset($a['epic_magic']));\n$fp = fopen(__FILE__, 'r');\nvar_dump($a[$fp]);\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
