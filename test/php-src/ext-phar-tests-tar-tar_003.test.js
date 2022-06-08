// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/tar_003.phpt
  it("Phar: tar-based phar, valid 1", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/tarmaker.php.inc';\n$fname = __DIR__ . '/tar_003.phar.tar';\n$alias = 'phar://' . $fname;\n$tar = new tarmaker($fname, 'none');\n$tar->init();\n$tar->addFile('.phar/stub.php', \"<?php // tar-based phar archive stub file\\n__HALT_COMPILER();\");\n$tar->addFile('tar_003.phpt', $g = fopen(__FILE__, 'r'));\n$tar->addFile('internal/file/here', \"hi there!\\n\");\n$tar->mkDir('internal/dir');\n$tar->mkDir('dir');\n$tar->close();\nfclose($g);\necho file_get_contents($alias . '/internal/file/here');\ntry {\n$tar = opendir($alias . '/');\n} catch (Exception $e) {\necho $e->getMessage().\"\\n\";\n}\nwhile (false !== ($v = readdir($tar))) {\n    echo (is_file($alias . '/' . $v) ? \"file\\n\" : \"dir\\n\");\n    echo $v . \"\\n\";\n}\nclosedir($tar);\n/* ensure none of the dir tar files were freed */\necho \"second round\\n\";\n$tar = opendir($alias . '/');\nwhile (false !== ($v = readdir($tar))) {\n    echo (is_file($alias . '/' . $v) ? \"file\\n\" : \"dir\\n\");\n    echo $v . \"\\n\";\n}\nclosedir($tar);\n?>")).toMatchSnapshot();
  });
});
