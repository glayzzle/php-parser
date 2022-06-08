// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/readgzfile_basic.phpt
  it("Test function readgzfile() reading a gzip relative file", function () {
    expect(parser.parseCode("<?php\n$plaintxt = <<<EOT\nhello world\nis a very common test\nfor all languages\nEOT;\n$dirname = 'readgzfile_temp';\n$filename = $dirname.'/readgzfile_basic.txt.gz';\nmkdir($dirname);\n$h = gzopen($filename, 'w');\ngzwrite($h, $plaintxt);\ngzclose($h);\nvar_dump(readgzfile( $filename ) );\nunlink($filename);\nrmdir($dirname);\n?>")).toMatchSnapshot();
  });
});
