// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug63741.phpt
  it("Bug #63741 (Crash when autoloading from spl)", function () {
    expect(parser.parseCode("<?php\nfile_put_contents(__DIR__.\"/bug63741.tmp.php\",\n<<<'EOT'\n<?php\nif (isset($autoloading))\n{\n    class ClassToLoad\n    {\n        static function func ()\n        {\n            print \"OK!\\n\";\n        }\n    }\n    return;\n}\nelse\n{\n    class autoloader\n    {\n        static function autoload($classname)\n        {\n            print \"autoloading...\\n\";\n            $autoloading = true;\n            include __FILE__;\n        }\n    }\n    spl_autoload_register([\"autoloader\", \"autoload\"]);\n    function start()\n    {\n        ClassToLoad::func();\n    }\n    start();\n}\n?>\nEOT\n);\ninclude __DIR__.\"/bug63741.tmp.php\";\n?>")).toMatchSnapshot();
  });
});
