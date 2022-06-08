// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug74991.phpt
  it("Phar: PHP bug #74991: include_path has a 4096 char (minus \"__DIR__:\") limit, in some PHAR cases", function () {
    expect(parser.parseCode("<?php\n// create a sample file in a custom include_path to lookup from the phar later:\nmkdir('path');\ntouch('path/needle.php');\n$p = new Phar('sample.phar');\n// the use of a sub path is crucial, and make the include_path 1 byte larger (=OVERFLOW) than the MAXPATHLEN, the include_path will then be truncated to 4096 (MAXPATHLEN) into 'phar://..sample.phar/some:xx..xx:pat' so it will fail to find needle.php:\n$p['some/file'] = \"<?php const MAXPATHLEN = 4096, OVERFLOW = 1, PATH = 'path'; set_include_path(str_repeat('x', MAXPATHLEN - strlen(__DIR__ . PATH_SEPARATOR . PATH_SEPARATOR . PATH) + OVERFLOW) . PATH_SEPARATOR . PATH); require('needle.php');\";\n$p->setStub(\"<?php Phar::mapPhar('sample.phar'); __HALT_COMPILER();\");\n// execute the phar code:\nrequire('phar://sample.phar/some/file');")).toMatchSnapshot();
  });
});
