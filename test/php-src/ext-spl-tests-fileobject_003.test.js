// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_003.phpt
  it("SPL: SplFileInfo cloning", function () {
    expect(parser.parseCode("<?php\nfunction test($name, $lc, $lp)\n{\n    static $i = 0;\n    echo \"===$i===\\n\";\n    $i++;\n    $o = new SplFileInfo($name);\n    var_dump($o);\n    $c = clone $o;\n    var_dump($c);\n    var_dump($o === $c);\n    var_dump($o == $c);\n    var_dump($o->getPathname() == $c->getPathname());\n    try {\n        $f = new SplFileObject($name);\n        var_dump($name);\n        var_dump($f->getPathName());\n        $l = substr($f->getPathName(), -1);\n        var_dump($l != '/' && $l != '\\\\' && $l == $lc);\n        var_dump($f->getFileName());\n        $l = substr($f->getFileName(), -1);\n        var_dump($l != '/' && $l != '\\\\' && $l == $lc);\n        var_dump($f->getPath());\n        $l = substr($f->getPath(), -1);\n        var_dump($l != '/' && $l != '\\\\' && $l == $lp);\n    } catch (LogicException $e) {\n        echo \"LogicException: \".$e->getMessage().\"\\n\";\n    }\n    try {\n        $fo = $o->openFile();\n        var_dump($fo->getPathName(), $fo->getFileName(), $fo->getPath());\n    } catch (LogicException $e) {\n        echo \"LogicException: \".$e->getMessage().\"\\n\";\n    }\n}\ntest(__DIR__ . '/' . 'fileobject_001a.txt', 't', substr(__DIR__,-1));\ntest(__DIR__ . '/', substr(__DIR__,-1), 'l');\ntest(__DIR__,       substr(__DIR__,-1), 'l');\n?>")).toMatchSnapshot();
  });
});
