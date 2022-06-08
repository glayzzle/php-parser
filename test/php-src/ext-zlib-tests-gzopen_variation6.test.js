// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/gzopen_variation6.phpt
  it("Test gzopen() function : variation: relative/absolute file", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing gzopen() : variation ***\\n\";\n$absfile = __FILE__.'.tmp';\n$relfile = \"gzopen_variation6.tmp\";\n$h = gzopen($absfile, \"w\");\ngzwrite($h, \"This is an absolute file\");\ngzclose($h);\n$h = gzopen($relfile, \"w\");\ngzwrite($h, \"This is a relative file\");\ngzclose($h);\n$h = gzopen($absfile, \"r\");\ngzpassthru($h);\nfclose($h);\necho \"\\n\";\n$h = gzopen($relfile, \"r\");\ngzpassthru($h);\ngzclose($h);\necho \"\\n\";\nunlink($absfile);\nunlink($relfile);\n?>")).toMatchSnapshot();
  });
});
