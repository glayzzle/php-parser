// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug67215.phpt
  it("Bug #67215 (php-cgi work with opcache, may be segmentation fault happen)", function () {
    expect(parser.parseCode("<?php\n$file_c = __DIR__ . \"/bug67215.c.php\";\n$file_p = __DIR__ . \"/bug67215.p.php\";\nfile_put_contents($file_c, \"<?php require '$file_p'; class c extends p {} ?>\");\nfile_put_contents($file_p, '<?php class p { protected $var = \"\"; } ?>');\nrequire $file_c;\n$a = new c();\nrequire $file_c;\n?>")).toMatchSnapshot();
  });
});
