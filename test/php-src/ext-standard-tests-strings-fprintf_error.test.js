// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/fprintf_error.phpt
  it("Test fprintf() function (errors)", function () {
    expect(parser.parseCode("<?php\n/* Testing Error Conditions */\necho \"*** Testing Error Conditions ***\\n\";\n/* zero argument */\ntry {\n    var_dump( fprintf() );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n/* scalar argument */\ntry {\n    var_dump( fprintf(3) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n/* NULL argument */\ntry {\n    var_dump( fprintf(NULL) );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
