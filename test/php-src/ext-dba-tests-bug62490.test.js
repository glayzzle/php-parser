// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dba/tests/bug62490.phpt
  it("Bug #62490 (dba_delete returns true on missing item (inifile))", function () {
    expect(parser.parseCode("<?php\n$handler = \"inifile\";\ninclude \"test.inc\";\n$dba = dba_open($db_filename, \"n\", $handler)\n    or die;\nfor ($i = 0; $i < 3; ++$i) {\n    echo \"insert $i:\";\n    var_dump(dba_insert(\"a\", $i, $dba));\n}\necho \"exists:\";\nvar_dump(dba_exists(\"a\", $dba));\necho \"delete:\";\nvar_dump(dba_delete(\"a\", $dba));\necho \"exists:\";\nvar_dump(dba_exists(\"a\", $dba));\necho \"delete:\";\nvar_dump(dba_delete(\"a\", $dba));\n?>")).toMatchSnapshot();
  });
});
