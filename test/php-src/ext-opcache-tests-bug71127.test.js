// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug71127.phpt
  it("Bug #71127 (Define in auto_prepend_file is overwrite)", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . \"/bug71127.inc\";\nfile_put_contents($file, \"<?php define('FOO', 'bad'); echo FOO;?>\");\ndefine(\"FOO\", \"okey\");\ninclude($file);\n?>")).toMatchSnapshot();
  });
});
