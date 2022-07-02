// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug18556.phpt
  it("Bug #18556 (Setting locale to 'tr_TR' lowercases class names)", function () {
    expect(parser.parseCode("<?php\n$g_lang = 'tr_TR';\nputenv(\"LANG=$g_lang\");\nsetlocale(LC_ALL, $g_lang);\nclass InfoBlob {\n   var $foo;\n   function __construct() {\n      $this->foo = \"Foo\";\n   }\n}\necho \"Instantiating an infoBlob with a lowercase i\\n\";\n$foobar = new infoBlob();\necho $foobar->foo;\necho \"\\nInstantiating an InfoBlob with an uppercase I\\n\";\n$foobar = new InfoBlob();\necho $foobar->foo;\necho \"\\n\";\nsetlocale(LC_ALL, \"tr_TR.utf8\");\nforeach(get_declared_classes() as $class)\n{\n    if(!class_exists($class))\n        echo \"$class No Longer Exists!\\n\";\n}\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
