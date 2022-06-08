// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug42364.phpt
  it("Bug #42364 (Crash when using getRealPath with DirectoryIterator)", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__ . '/bug42364';\n@mkdir($dir);\ntouch($dir . '/test');\n$count = 0;\n$it = new DirectoryIterator($dir);\nforeach ($it as $e) {\n    $count++;\n    $type = gettype($e->getRealPath());\n    if ($type != \"string\" && $type != \"unicode\") {\n        echo $e->getFilename(), \" is a \", gettype($e->getRealPath()), \"\\n\";\n    }\n}\nif ($count > 0) {\n    echo \"Found $count entries!\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
