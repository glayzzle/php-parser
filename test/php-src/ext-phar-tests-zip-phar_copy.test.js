// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/phar_copy.phpt
  it("Phar: copy() zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '2.phar.php';\n$pname = 'phar://'.$fname;\n$iname = '/file.txt';\n$ename = '/error/..';\n$p = new Phar($fname);\ntry\n{\n    $p['a'] = 'hi';\n    $p->startBuffering();\n    $p->copy('a', 'b');\n    echo file_get_contents($p['b']->getPathName());\n    $p->copy('b', 'c');\n    $p->stopBuffering();\n    echo file_get_contents($p['c']->getPathName());\n    copy($fname, $fname2);\n    var_dump($p->isFileFormat(Phar::ZIP));\n    $p->copy('a', $ename);\n}\ncatch(Exception $e)\n{\n    echo $e->getMessage() . \"\\n\";\n}\nini_set('phar.readonly',1);\n$p2 = new Phar($fname2);\nvar_dump($p2->isFileFormat(Phar::ZIP));\necho \"\\n\";\necho 'a: ' , file_get_contents($p2['a']->getPathName());\necho 'b: ' ,file_get_contents($p2['b']->getPathName());\necho 'c: ' ,file_get_contents($p2['c']->getPathName());\n?>\n===DONE===")).toMatchSnapshot();
  });
});
