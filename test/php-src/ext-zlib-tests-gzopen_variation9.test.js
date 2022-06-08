// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzopen_variation9.phpt
  it("Test gzopen() function : variation: try opening with possibly invalid modes", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gzopen() : variation ***\\n\";\n$modes = array('r+', 'rf', 'w+' , 'e');\n$file = __DIR__.\"/004.txt.gz\";\nforeach ($modes as $mode) {\n    echo \"mode=$mode\\n\";\n    $h = gzopen($file, $mode);\n    echo \"gzopen=\";\n    var_dump($h);\n    if ($h !== false) {\n       gzclose($h);\n    }\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
