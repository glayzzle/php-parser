// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug72035.phpt
  it("Bug #72035 php-cgi.exe fails to run scripts relative to drive root", function () {
    expect(parser.parseCode("<?php\n$fl = __DIR__ . DIRECTORY_SEPARATOR . md5(uniqid()) . \".php\";\n$fl = substr($fl, 2);\n$cgi = realpath(dirname(PHP_BINARY) . DIRECTORY_SEPARATOR . \"php-cgi.exe\");\nfile_put_contents($fl, \"<?php echo \\\"hello\\\", \\\"\\n\\\"; ?>\");\n$cmd = \"$cgi -n -C $fl\";\n/* Need to run CGI with the env reset. */\n$desc = array(0 => array(\"pipe\", \"r\"));\n$proc = proc_open($cmd, $desc, $pipes, getcwd(), array());\nif (is_resource($proc)) {\n    echo stream_get_contents($pipes[0]);\n    proc_close($proc);\n}\nunlink($fl);\n?>")).toMatchSnapshot();
  });
});
