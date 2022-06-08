// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fseek_variation3.phpt
  it("Test fseek() function : variation functionality beyond file boundaries", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing fseek() : variation - beyond file boundaries ***\\n\";\n$outputfile = __FILE__.\".tmp\";\n$h = fopen($outputfile, \"wb+\");\nfor ($i = 1; $i < 10; $i++) {\n   fwrite($h, chr(0x30 + $i));\n}\necho \"--- fseek beyond start of file ---\\n\";\nvar_dump(fseek($h, -4, SEEK_SET));\necho \"after -4 seek: \".bin2hex(fread($h,1)).\"\\n\";\nvar_dump(fseek($h, -1, SEEK_CUR));\necho \"after seek back 1: \".bin2hex(fread($h,1)).\"\\n\";\nvar_dump(fseek($h, -20, SEEK_CUR));\necho \"after seek back 20: \".bin2hex(fread($h,1)).\"\\n\";\necho \"--- fseek beyond end of file ---\\n\";\nvar_dump(fseek($h, 16, SEEK_SET));\nfwrite($h, \"end\");\nfseek($h ,0, SEEK_SET);\n$data = fread($h, 4096);\necho bin2hex($data).\"\\n\";\nfclose($h);\nunlink($outputfile);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
