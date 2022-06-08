// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/bug61367-write.phpt
  it("Bug #61367: open_basedir bypass in libxml RSHUTDOWN: write test", function () {
    expect(parser.parseCode("<?php\nclass StreamExploiter {\n    public function stream_close (  ) {\n        $doc = new DOMDocument;\n        $doc->appendChild($doc->createTextNode('hello'));\n        var_dump($doc->save(dirname(getcwd()) . '/bad'));\n    }\n    public function stream_open (  $path ,  $mode ,  $options ,  &$opened_path ) {\n        return true;\n    }\n}\nvar_dump(mkdir('test_bug_61367-write'));\nvar_dump(mkdir('test_bug_61367-write/base'));\nvar_dump(file_put_contents('test_bug_61367-write/bad', 'blah'));\nvar_dump(chdir('test_bug_61367-write/base'));\nstream_wrapper_register( 'exploit', 'StreamExploiter' );\n$s = fopen( 'exploit://', 'r' );\n?>")).toMatchSnapshot();
  });
});
