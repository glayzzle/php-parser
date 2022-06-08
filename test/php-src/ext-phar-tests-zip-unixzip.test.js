// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/unixzip.phpt
  it("Phar: test a zip archive created by unix \"zip\" command", function () {
    expect(parser.parseCode("<?php\n$a = new PharData(__DIR__ . '/files/zip.zip');\nforeach ($a as $b) {\n    if ($b->isDir()) {\n        echo \"dir \" . $b->getPathName() . \"\\n\";\n    } else {\n        echo $b->getPathName(), \"\\n\";\n        echo file_get_contents($b->getPathName()), \"\\n\";\n    }\n}\nif (isset($a['notempty/hi.txt'])) {\n    echo $a['notempty/hi.txt']->getPathName() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
