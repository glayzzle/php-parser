// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug44295-win.phpt
  it("user defined error handler + set_error_handling(EH_THROW)", function () {
    expect(parser.parseCode("<?php\n$dir = 'c:\\\\not\\\\exists\\\\here';\nset_error_handler('my_error_handler');\nfunction my_error_handler() {$a = func_get_args(); print \"in error handler\\n\"; }\ntry {\n        print \"before\\n\";\n        $iter = new DirectoryIterator($dir);\n        print get_class($iter) . \"\\n\";\n        print \"after\\n\";\n} catch (Exception $e) {\n        print \"in catch: \".$e->getMessage().\"\\n\";\n}\n?>\n==DONE==\n<?php exit(0); ?>")).toMatchSnapshot();
  });
});
