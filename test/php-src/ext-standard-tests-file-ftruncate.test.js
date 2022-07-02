// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/ftruncate.phpt
  it("ftruncate() tests", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__.\"/ftruncate.dat\";\nfile_put_contents($filename, \"some test data inside\");\n$fp = fopen($filename, \"r\");\nvar_dump(ftruncate($fp, 10));\nfclose($fp);\nvar_dump(file_get_contents($filename));\n$fp = fopen($filename, \"w\");\nvar_dump(ftruncate($fp, 10));\nfclose($fp);\nvar_dump(file_get_contents($filename));\nfile_put_contents($filename, \"some test data inside\");\n$fp = fopen($filename, \"a\");\nvar_dump(ftruncate($fp, 10));\nfclose($fp);\nvar_dump(file_get_contents($filename));\n$fp = fopen($filename, \"a\");\nvar_dump(ftruncate($fp, 0));\nfclose($fp);\nvar_dump(file_get_contents($filename));\nfile_put_contents($filename, \"some test data inside\");\n$fp = fopen($filename, \"a\");\ntry {\n    var_dump(ftruncate($fp, -1000000000));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nfclose($fp);\nvar_dump(file_get_contents($filename));\n@unlink($filename);\n?>")).toMatchSnapshot();
  });
});
