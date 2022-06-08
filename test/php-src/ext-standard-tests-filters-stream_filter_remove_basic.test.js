// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/filters/stream_filter_remove_basic.phpt
  it("Test stream_filter_remove() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing stream_filter_remove() : basic functionality ***\\n\";\n$file = __DIR__ . DIRECTORY_SEPARATOR . 'streamfilterTest.txt';\ntouch( $file );\n$fp = fopen( $file, 'w+' );\n$filter = stream_filter_append( $fp, \"string.rot13\", STREAM_FILTER_WRITE );\nfwrite( $fp, \"Testing the rot13 filter which shifts some things around.\" );\nvar_dump( stream_filter_remove( $filter ) );\nfwrite( $fp, \"\\nadd some more un-filtered foobar\\n\" );\nrewind( $fp );\nfpassthru( $fp );\nfclose( $fp );\n?>")).toMatchSnapshot();
  });
});
