// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzfile_basic.phpt
  it("Test function gzfile() reading a gzip relative file", function () {
    expect(parser.parseCode("<?php\n$plaintxt = <<<EOT\nhello world\nis a very common test\nfor all languages\nEOT;\n$dirname = 'gzfile_temp';\n$filename = $dirname.'/gzfile_basic.txt.gz';\nmkdir($dirname);\n$h = gzopen($filename, 'w');\ngzwrite($h, $plaintxt);\ngzclose($h);\nvar_dump(gzfile( $filename ) );\nunlink($filename);\nrmdir($dirname);\n?>")).toMatchSnapshot();
  });
});
