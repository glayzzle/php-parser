// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug13786.phpt
  it("Phar: bug #13786: \"PHP crashes on phar recreate after unlink\"", function () {
    expect(parser.parseCode("<?php\ntry {\nfor ($i = 0; $i < 2; $i++) {\n    $fname = \"DataArchive.phar\";\n    $path = __DIR__ . DIRECTORY_SEPARATOR . $fname;\n    $phar = new Phar($path);\n    $phar->addFromString($i, \"file $i in $fname\");\n    var_dump(file_get_contents($phar[$i]));\n    unset($phar);\n    unlink($path);\n}\necho(\"\\nWritten files: $i\\n\");\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
