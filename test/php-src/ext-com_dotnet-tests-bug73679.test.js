// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug73679.phpt
  it("Bug #73679 DOTNET read access violation using invalid codepage", function () {
    expect(parser.parseCode("<?php\n$stack = new DOTNET(\"mscorlib\", \"System.Collections.Stack\", -2200000000);\n$stack->Push(\".Net\");\n$stack->Push(\"Hello \");\necho $stack->Pop() . $stack->Pop();\n?>")).toMatchSnapshot();
  });
});
