// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/com_dotnet/tests/bug79332.phpt
  it("Bug #79332 (php_istreams are never freed)", function () {
    expect(parser.parseCode("<?php\n$ph = new COMPersistHelper(null);\ntry {\n    $ph->LoadFromStream(fopen(__FILE__, 'r'));\n} catch (com_exception $ex) {\n    // use hard-coded message to avoid localization issues\n    echo \"A com_exception has been thrown\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
