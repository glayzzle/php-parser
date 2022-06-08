// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/bug61367-read.phpt
  it("Bug #61367: open_basedir bypass in libxml RSHUTDOWN: read test", function () {
    expect(parser.parseCode("<?php\n/*\n * Note: Using error_reporting=E_ALL & ~E_NOTICE to suppress \"Trying to get property of non-object\" notices.\n */\nclass StreamExploiter {\n    public function stream_close (  ) {\n        $doc = new DOMDocument;\n        $doc->resolveExternals = true;\n        $doc->substituteEntities = true;\n        $dir = htmlspecialchars(dirname(getcwd()));\n        $dir = str_replace('\\\\', '/', $dir); // fix for windows\n        $doc->loadXML( <<<XML\n<!DOCTYPE doc [\n    <!ENTITY file SYSTEM \"file:///$dir/bad\">\n]>\n<doc>&file;</doc>\nXML\n        );\n        print $doc->documentElement->firstChild->nodeValue;\n    }\n    public function stream_open (  $path ,  $mode ,  $options ,  &$opened_path ) {\n        return true;\n    }\n}\nvar_dump(mkdir('test_bug_61367-read'));\nvar_dump(mkdir('test_bug_61367-read/base'));\nvar_dump(file_put_contents('test_bug_61367-read/bad', 'blah'));\nvar_dump(chdir('test_bug_61367-read/base'));\nstream_wrapper_register( 'exploit', 'StreamExploiter' );\n$s = fopen( 'exploit://', 'r' );\n?>")).toMatchSnapshot();
  });
});
