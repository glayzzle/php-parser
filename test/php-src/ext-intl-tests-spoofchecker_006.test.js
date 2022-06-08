// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/spoofchecker_006.phpt
  it("spoofchecker suspicious character checker", function () {
    expect(parser.parseCode("<?php\necho \"paypal with Cyrillic spoof characters\\n\";\n$x = new Spoofchecker();\nvar_dump($x->isSuspicious(\"http://www.payp\\u{0430}l.com\"));\nvar_dump($x->isSuspicious(\"\\u{041F}aypal.com\"));\necho \"certain all-uppercase Latin sequences can be spoof of Greek\\n\";\n$x = new Spoofchecker();\n$x->setAllowedLocales(\"gr_GR\");\nvar_dump($x->isSuspicious(\"NAPKIN PEZ\"));\nvar_dump($x->isSuspicious(\"napkin pez\"));\n?>")).toMatchSnapshot();
  });
});
