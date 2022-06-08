// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug69720.phpt
  it("Phar - bug #69720 - Null pointer dereference in phar_get_fp_offset()", function () {
    expect(parser.parseCode("<?php\ntry {\n    // open an existing phar\n    $p = new Phar(__DIR__.\"/bug69720.phar\",0);\n    // Phar extends SPL's DirectoryIterator class\n    echo $p->getMetadata();\n    foreach (new RecursiveIteratorIterator($p) as $file) {\n        // $file is a PharFileInfo class, and inherits from SplFileInfo\n        $temp=\"\";\n        $temp= $file->getFileName() . \"\\n\";\n        $temp.=file_get_contents($file->getPathName()) . \"\\n\"; // display contents\n        var_dump($file->getMetadata());\n    }\n}\n catch (Exception $e) {\n    echo 'Could not open Phar: ', $e;\n}\n?>")).toMatchSnapshot();
  });
});
