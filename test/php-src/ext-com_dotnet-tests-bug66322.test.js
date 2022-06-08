// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug66322.phpt
  it("Bug #66322 (COMPersistHelper::SaveToFile can save to wrong location)", function () {
    expect(parser.parseCode("<?php\n$w = new COM('Word.Application');\n$doc = $w->Documents->Add();\n$ph = new COMPersistHelper($doc);\n$filename = __DIR__ . '\\\\..\\\\' . basename(__DIR__) . '\\\\66322.docx';\n$ph->SaveToFile($filename);\nvar_dump(file_exists($filename));\n$w->Quit();\n?>")).toMatchSnapshot();
  });
});
