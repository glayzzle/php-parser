// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/spoofchecker_001.phpt
  it("spoofchecker suspicious character checker", function () {
    expect(parser.parseCode("<?php\n$url = \"http://www.payp\\xD0\\xB0l.com\";\n$x = new Spoofchecker();\necho \"paypal with Cyrillic spoof characters\\n\";\nvar_dump($x->isSuspicious($url));\necho \"certain all-uppercase Latin sequences can be spoof of Greek\\n\";\nvar_dump($x->isSuspicious(\"NAPKIN PEZ\"));\nvar_dump($x->isSuspicious(\"napkin pez\"));\n?>")).toMatchSnapshot();
  });
});
