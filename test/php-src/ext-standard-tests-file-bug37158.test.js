// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug37158.phpt
  it("Bug #37158 (if userspace stream is present, fread() reads in 8192 max, otherwise it works)", function () {
    expect(parser.parseCode("<?php\nclass VariableStream {\n   function stream_open($path, $mode, $options, &$opened_path)\n   {\n       return true;\n   }\n}\nstream_wrapper_register(\"var\", \"VariableStream\");\n$file = __DIR__ . '/footest.txt';\n$x = str_repeat(1, 8192);\n$fp = fopen($file, 'w');\nfor ($i = 0; $i < 5; $i++) {\n    fwrite($fp, $x);\n}\nfclose($fp);\n$fp = fopen($file, 'r');\n$outsidecontents = fread($fp, 20000);\nfclose($fp);\nvar_dump('size of contents 1 = ' . strlen($outsidecontents));\n$outsidecontents = file_get_contents($file);\nvar_dump('size of contents 2 = ' . strlen($outsidecontents));\nunlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
