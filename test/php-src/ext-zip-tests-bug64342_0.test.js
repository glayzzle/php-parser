// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/bug64342_0.phpt
  it("Bug #64342 ZipArchive::addFile() has to check file existence (variation 1)", function () {
    expect(parser.parseCode("<?php\n$zip = new ZipArchive;\n$res = $zip->open(__DIR__ . '/bug64342.zip', ZipArchive::CREATE);\nif ($res === TRUE) {\n    $f = md5(uniqid()) . '.txt';\n    echo \"$f\\n\";\n    $res = $zip->addFile($f);\n    if (true == $res) {\n        echo \"add ok\\n\";\n    } else {\n        echo \"add failed\\n\";\n    }\n    $res = $zip->close();\n    if (true == $res) {\n        echo \"close ok\\n\";\n    } else {\n        echo \"close failed\\n\";\n    }\n} else {\n    echo \"open failed\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
