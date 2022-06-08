// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug67359.phpt
  it("Bug #67359 (Segfault in recursiveDirectoryIterator)", function () {
    expect(parser.parseCode("<?php\ntry\n{\n    $rdi = new recursiveDirectoryIterator(__DIR__,  FilesystemIterator::SKIP_DOTS | FilesystemIterator::UNIX_PATHS);\n    $it = new recursiveIteratorIterator( $rdi );\n    $it->seek(1);\n    while( $it->valid())\n    {\n        if( $it->isFile() )\n        {\n            $it->current();\n        }\n        $it->next();\n    }\n    $it->current();\n}\ncatch(Exception $e)\n{\n}\necho \"okey\"\n?>")).toMatchSnapshot();
  });
});
