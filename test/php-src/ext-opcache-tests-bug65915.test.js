// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug65915.phpt
  it("Bug #65915 (Inconsistent results with require return value)", function () {
    expect(parser.parseCode("<?php\n$tmp = __DIR__ . \"/bug65915.inc.php\";\nfile_put_contents($tmp, '<?php return function(){ return \"a\";};');\n$f = require $tmp;\nvar_dump($f());\nvar_dump(opcache_invalidate($tmp, true));\nfile_put_contents($tmp, '<?php return function(){ return \"b\";};');\n$f = require $tmp;\nvar_dump($f());\n@unlink($tmp);\n?>")).toMatchSnapshot();
  });
});
