// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/readgzfile_basic2.phpt
  it("Test function readgzfile() reading a plain relative file", function () {
    expect(parser.parseCode("<?php\n$plaintxt = <<<EOT\nhello world\nis a very common test\nfor all languages\nEOT;\n$dirname = 'readgzfile_temp';\n$filename = $dirname.'/readgzfile_basic2.txt';\nmkdir($dirname);\n$h = fopen($filename, 'w');\nfwrite($h, $plaintxt);\nfclose($h);\nvar_dump(readgzfile( $filename ) );\nunlink($filename);\nrmdir($dirname);\n?>")).toMatchSnapshot();
  });
});
