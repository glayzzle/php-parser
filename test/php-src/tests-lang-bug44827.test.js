// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug44827.phpt
  it("Bug #44827 (Class error when trying to access :: as constant)", function () {
    expect(parser.parseCode("<?php\ntry {\n    define('::', true);\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    constant('::');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
