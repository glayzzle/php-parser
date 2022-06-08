// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/spoofchecker_003.phpt
  it("spoofchecker with locale settings", function () {
    expect(parser.parseCode("<?php\n$korean = \"\\xED\\x95\\x9C\" . \"\\xEA\\xB5\\xAD\" . \"\\xEB\\xA7\\x90\";\n$x = new Spoofchecker();\necho \"Is suspcious, en_US\\n\";\n$x->setAllowedLocales('en_US');\nvar_dump($x->isSuspicious($korean));\necho \"Is suspcious, ko_KR\\n\";\n$x->setAllowedLocales('en_US, ko_KR');\nvar_dump($x->isSuspicious($korean));\n?>")).toMatchSnapshot();
  });
});
