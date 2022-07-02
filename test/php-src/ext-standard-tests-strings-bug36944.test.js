// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug36944.phpt
  it("Bug #36944 (strncmp & strncasecmp do not return false on negative string length)", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(strncmp(\"test \", \"e\", -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(strncmp(\"test \", \"e\", 10));\nvar_dump(strncmp(\"test \", \"e\", 0));\ntry {\n    var_dump(strncasecmp(\"test \", \"E\", -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump(strncasecmp(\"test \", \"E\", 10));\nvar_dump(strncasecmp(\"test \", \"E\", 0));\n?>")).toMatchSnapshot();
  });
});
