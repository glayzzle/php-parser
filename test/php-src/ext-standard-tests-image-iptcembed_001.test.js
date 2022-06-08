// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/iptcembed_001.phpt
  it("iptcembed() and wrong file", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__.'/iptcembed_001.data';\n$fp = fopen($file, \"w\");\nfwrite($fp, \"-1-1\");\nfclose($fp);\nvar_dump(iptcembed(-1, $file, -1));\nunlink($file);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
