// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/odt.phpt
  it("Phar: test a zip archive created by openoffice", function () {
    expect(parser.parseCode("<?php\n$a = new PharData(__DIR__ . '/files/odt.odt');\nforeach (new RecursiveIteratorIterator($a, RecursiveIteratorIterator::LEAVES_ONLY) as $b) {\n    if ($b->isDir()) {\n        echo \"dir \" . $b->getPathName() . \"\\n\";\n    } else {\n        echo $b->getPathName() . \"\\n\";\n    }\n}\n// this next line is for increased code coverage\ntry {\n    $b = new Phar(__DIR__ . '/files/odt.odt');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
