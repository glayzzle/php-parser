// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug77263.phpt
  it("Bug #77263 (Segfault when using 2 RecursiveFilterIterator)", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__ . '/bug77263';\nmkdir($dir);\nmkdir(\"$dir/subdir\");\ntouch(\"$dir/file1\");\ntouch(\"$dir/subdir/file2\");\nclass Filter1 extends RecursiveFilterIterator {\n    public function accept(): bool { return $this->getInnerIterator()->getSubPathname() != ''; }\n}\nclass Filter2 extends RecursiveFilterIterator {\n    public function accept(): bool { return $this->getInnerIterator()->getSubPathname() != ' '; }\n}\n$iterator = new RecursiveDirectoryIterator($dir, FilesystemIterator::SKIP_DOTS );\n$iterator = new Filter1( $iterator );\n$iterator = new Filter2( $iterator );\n$iterator = new RecursiveIteratorIterator( $iterator, RecursiveIteratorIterator::LEAVES_ONLY, RecursiveIteratorIterator::CATCH_GET_CHILD );\nforeach ( $iterator as $item ) {\n}\n?>\nOK")).toMatchSnapshot();
  });
});
