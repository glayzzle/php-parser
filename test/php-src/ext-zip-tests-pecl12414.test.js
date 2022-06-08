// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/pecl12414.phpt
  it("Bug #12414 ( extracting files from damaged archives)", function () {
    expect(parser.parseCode("<?php\n$filename = 'MYLOGOV2.GFX';\n$zipname = __DIR__ . \"/pecl12414.zip\";\n$za = new ZipArchive();\n$res =$za->open($zipname);\nif ($res === TRUE) {\n    $finfo=$za->statName($filename);\n    $file_size=$finfo['size'];\n    if($file_size>0) {\n        $contents=$za->getFromName($filename);\n        echo \"ZIP contents size: \" . strlen($contents) . \"\\n\";\n        if(strlen($contents)!=$file_size) {\n            echo \"zip_readfile recorded data does not match unpacked size: \" . $zipname . \" : \" . $filename;\n        }\n    } else {\n        $contents=false;\n        echo \"zip_readfile could not open stream from zero length file \" . $zipname . \" : \" .$filename;\n    }\n    $za->close();\n} else {\n    echo \"zip_readfile could not read from \" . $zipname . \" : \" . $filename;\n}\n?>")).toMatchSnapshot();
  });
});
