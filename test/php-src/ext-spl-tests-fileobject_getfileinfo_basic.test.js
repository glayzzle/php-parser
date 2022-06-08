// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/fileobject_getfileinfo_basic.phpt
  it("SPL: SplFileObject::getFileInfo", function () {
    expect(parser.parseCode("<?php\n$file = __FILE__;\n$s = new SplFileObject( $file );\nvar_dump($fi = $s->getFileInfo(), (string)$fi);\n$d = new SplFileInfo( __DIR__ );\necho \"\\n\";\nvar_dump($fi = $d->getFileInfo(), (string)$fi);\n$d = new SplFileInfo( __DIR__.\"/\" );\necho \"\\n\";\nvar_dump($fi = $d->getFileInfo(), (string)$fi);\n?>")).toMatchSnapshot();
  });
});
