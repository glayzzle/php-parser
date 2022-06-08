// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/tidy/tests/020.phpt
  it("OO API", function () {
    expect(parser.parseCode("<?php\n$tidy = new tidy();\n$str  = <<<EOF\n<p>Isto � um texto em Portugu�s<br>\npara testes.</p>\nEOF;\n$tidy->parseString($str, array('output-xhtml'=>1), 'latin1');\n$tidy->cleanRepair();\n$tidy->diagnose();\nvar_dump(tidy_warning_count($tidy) > 0);\nvar_dump(strlen($tidy->errorBuffer) > 50);\necho $tidy;\n?>")).toMatchSnapshot();
  });
});
