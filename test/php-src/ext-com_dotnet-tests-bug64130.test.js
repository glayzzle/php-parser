// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug64130.phpt
  it("Bug #64130 (COM obj parameters passed by reference are not updated)", function () {
    expect(parser.parseCode("<?php\n$ie = new com('InternetExplorer.Application');\n$x = 0;\n$y = 0;\ntry {\n    $ie->clientToWindow($x, $y);\n} catch (com_exception $ex) {}\nvar_dump($x > 0, $y > 0);\n$ie->quit();\n?>")).toMatchSnapshot();
  });
});
