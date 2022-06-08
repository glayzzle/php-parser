// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_decompress.phpt
  it("Phar::decompress()", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '2.phar.gz';\n$pname = 'phar://' . $fname;\n$file = '<?php __HALT_COMPILER(); ?>';\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\ninclude 'files/phar_test.inc';\n$phar = new Phar($fname);\n$gz = $phar->compress(Phar::GZ);\ncopy($gz->getPath(), $fname2);\n$a = new Phar($fname2);\nvar_dump($a->isCompressed());\n$unc = $a->compress(Phar::NONE);\necho $unc->getPath() . \"\\n\";\n$unc2 = $gz->decompress();\necho $unc2->getPath() . \"\\n\";\n$unc3 = $gz->decompress('hooba.phar');\necho $unc3->getPath() . \"\\n\";\n$zip = $phar->convertToData(Phar::ZIP);\nini_set('phar.readonly', 1);\ntry {\n    $gz->decompress();\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $zip->decompress();\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
