// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fread_fwrite_basic.phpt
  it("fread & fwrite - Test reading and writing using a single resource", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/file.c\n */\n$outputfile = __FILE__.\".tmp\";\necho \"--- testing rw moving about the file ---\\n\";\n$h = fopen($outputfile, 'wb+');\n$out1 = \"The 1st prrt\";\n$out2 = \" part of the ttxt\";\n$out3 = \"text\";\nfwrite($h, $out1);\nfseek($h, 0, SEEK_SET);\necho \"start:\".fread($h, strlen($out1) - 5). \"\\n\";\nfwrite($h, $out2);\necho \"at end:\".fread($h,100).\"\\n\";\nvar_dump(feof($h));\nfseek($h, -4, SEEK_CUR);\nfwrite($h, $out3);\nfseek($h, 0, SEEK_SET);\necho \"final:\".fread($h, 100).\"\\n\";\nfclose($h);\necho \"--- testing eof ---\\n\";\n$h = fopen($outputfile, 'ab+');\nfread($h,1024);\nvar_dump(feof($h));\nfread($h,1);\nvar_dump(feof($h));\n$out = \"extra\";\nfwrite($h, $out);\nvar_dump(feof($h));\nfread($h,1);\nvar_dump(feof($h));\nfseek($h, -strlen($out) + 1, SEEK_CUR);\necho \"last bytes: \".fread($h, strlen($out)).\"\\n\";\nfclose($h);\nunlink($outputfile);\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
