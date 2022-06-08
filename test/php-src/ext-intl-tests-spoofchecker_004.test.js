// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/spoofchecker_004.phpt
  it("spoofchecker with settings changed", function () {
    expect(parser.parseCode("<?php\n$korean = \"\\xED\\x95\\x9C\" . \"\\xEA\\xB5\\xAD\" . \"\\xEB\\xA7\\x90\";\n$x = new Spoofchecker();\necho \"Check with default settings\\n\";\nvar_dump($x->areConfusable(\"HELLO\", \"H\\xD0\\x95LLO\"));\nvar_dump($x->areConfusable(\"hello\", \"h\\xD0\\xB5llo\"));\necho \"Change confusable settings\\n\";\n$x->setChecks(Spoofchecker::MIXED_SCRIPT_CONFUSABLE |\n  Spoofchecker::WHOLE_SCRIPT_CONFUSABLE |\n  Spoofchecker::SINGLE_SCRIPT_CONFUSABLE);\nvar_dump($x->areConfusable(\"HELLO\", \"H\\xD0\\x95LLO\"));\nvar_dump($x->areConfusable(\"hello\", \"h\\xD0\\xB5llo\"));\n?>")).toMatchSnapshot();
  });
});
