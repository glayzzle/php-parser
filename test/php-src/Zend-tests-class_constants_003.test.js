// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_constants_003.phpt
  it("class constants as default function arguments and dynamically loaded classes", function () {
    expect(parser.parseCode("<?php\n$class_data = <<<DATA\n<?php\nclass test {\n    const val = 1;\n}\n?>\nDATA;\n$filename = __DIR__.\"/cc003.dat\";\nfile_put_contents($filename, $class_data);\nfunction foo($v = test::val) {\n    var_dump($v);\n}\ninclude $filename;\nfoo();\nfoo(5);\nunlink($filename);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
