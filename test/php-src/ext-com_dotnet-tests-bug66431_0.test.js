// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug66431_0.phpt
  it("Bug #66431 Special Character via COM Interface (CP_UTF8), Scripting.FileSystemObject", function () {
    expect(parser.parseCode("<?php\n$text= \"Xin chào cộng đồng PHP\";\n$fpath = str_replace(\"/\", \"\\\\\", __DIR__ . \"/bug66431.txt\");\n$fso = new COM(\"Scripting.FileSystemObject\");\n$fh = $fso->OpenTextFile($fpath, 2, true);\n$fh->Write($text);\n$fh->Close();\n$check_text = file_get_contents($fpath);\n$result = ($check_text == $text);\nvar_dump($result);\nif (!$result) {\n    echo \"Expected: '$check_text'\\n\";\n    echo \"Have: '$text'\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
