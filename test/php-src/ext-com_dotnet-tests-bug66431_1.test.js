// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug66431_1.phpt
  it("Bug #66431 Special Character via COM Interface (CP_UTF8), Application.Word", function () {
    expect(parser.parseCode("<?php\n$text= \"Xin chào cộng đồng PHP\";\n$fpath = str_replace(\"/\", \"\\\\\", __DIR__ . \"/bug66431.docx\");\ncom_load_typelib('Word.Application');\n$Wrd = new COM(\"word.application\", NULL, CP_UTF8);\n$Wrd->Documents->Add();\n$Wrd->Selection->TypeText($text);\n$Wrd->ActiveDocument->SaveAs($fpath);\n$Wrd->ActiveDocument->Close(false);\n$Wrd->Application->Quit();\nunset($Wrd);\n$Wrd = new COM(\"word.application\", NULL, CP_UTF8);\n$Wrd->Documents->Open($fpath, NULL, false);\n$check_text = $Wrd->ActiveDocument->Range($Wrd->ActiveDocument->Sentences(1)->Start, $Wrd->ActiveDocument->Sentences(1)->End)->Text;\n$Wrd->ActiveDocument->Close(false);\n$Wrd->Application->Quit();\nunset($Wrd);\n/* trim the returned text as we'll get windows eol from a word doc. */\n$result = (trim($check_text) == $text);\nvar_dump($result);\nif (!$result) {\n    echo \"Expected: '$check_text'\\n\";\n    echo \"Have: '$text'\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
