// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/ftruncate_bug76803.phpt
  it("Bug #76803 ftruncate changes file pointer", function () {
    expect(parser.parseCode("<?php\n$fn = __DIR__ . DIRECTORY_SEPARATOR . \"test76803\";\n$f = fopen($fn, \"w\");\nfwrite($f, \"Hello\");\nftruncate($f, 2);\nfwrite($f, \"World\");\nfclose($f);\nvar_dump(addslashes(file_get_contents($fn)));\n$f = fopen($fn, \"w\");\nfwrite($f, \"Hello\");\nftruncate($f, 2);\nfclose($f);\nvar_dump(addslashes(file_get_contents($fn)));\n$f = fopen('php://memory', 'w+');\nfwrite($f, 'Hello');\nftruncate($f, 2); // in 7.3 changes file pointer to 2\nfwrite($f, 'World');\nrewind($f);\nvar_dump(addslashes(stream_get_contents($f)));\nfclose($f);\n?>")).toMatchSnapshot();
  });
});
