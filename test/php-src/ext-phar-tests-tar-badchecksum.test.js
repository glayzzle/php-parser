// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/badchecksum.phpt
  it("Phar: tar with bad checksum", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.tar';\n$pname = 'phar://' . $fname;\ninclude __DIR__ . '/files/corrupt_tarmaker.php.inc';\n$a = new corrupt_tarmaker($fname, 'none');\n$a->init();\n$a->addFile('hithere', 'contents', null, 'checksum');\n$a->close();\ntry {\n    $p = new PharData($fname);\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
