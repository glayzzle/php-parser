// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/pharfileinfo_getcrc32.phpt
  it("Phar: PharFileInfo::getCRC32", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar';\n$pname = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n// compressed file length does not match incompressed length for an uncompressed file\n$files = array();\n$files['a/subdir/here'] = array('cont'=>'a','ulen'=>1,'clen'=>1);\ninclude 'files/phar_test.inc';\n$b = new PharFileInfo($pname . '/a/subdir');\ntry {\nvar_dump($b->getCRC32());\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\n$b = new PharFileInfo($pname . '/a/subdir/here');\ntry {\nvar_dump($b->getCRC32());\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\n$a = file_get_contents($pname . '/a/subdir/here');\ntry {\nvar_dump($b->getCRC32());\n} catch (Exception $e) {\necho $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
