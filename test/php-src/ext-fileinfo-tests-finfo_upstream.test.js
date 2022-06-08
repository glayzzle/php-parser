// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_upstream.phpt
  it("Fileinfo run upstream tests", function () {
    expect(parser.parseCode("<?php\n$lst = glob(__DIR__ . DIRECTORY_SEPARATOR . \"upstream/*.testfile\");\nforeach($lst as $p) {\n\t$mp = dirname($p) . DIRECTORY_SEPARATOR . basename($p, \".testfile\") . \".magic\";\n\t$tp = dirname($p) . DIRECTORY_SEPARATOR . basename($p, \".testfile\") . \".result\";\n\t$finfo = finfo_open(FILEINFO_NONE, file_exists($mp) ? $mp : NULL);\n\t$i = finfo_file( $finfo, $p);\n\t$exp = file_get_contents($tp);\n\tif ($i !== $exp) {\n\t\techo \"'$p' failed\\nexp: '$exp'\\ngot: '$i'\\n\";\n\t} \n\tfinfo_close($finfo);\n}\necho \"==DONE==\";\n?>")).toMatchSnapshot();
  });
});
