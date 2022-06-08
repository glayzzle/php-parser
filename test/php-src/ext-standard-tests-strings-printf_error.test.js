// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_error.phpt
  it("Test printf() function : error conditions", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing printf() : error conditions ***\\n\";\n// Zero arguments\necho \"\\n-- Testing printf() function with Zero arguments --\\n\";\ntry {\n    var_dump( printf() );\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n-- Testing printf() function with less than expected no. of arguments --\\n\";\n$format1 = '%s';\n$format2 = '%s%s';\n$format3 = '%s%s%s';\n$arg1 = 'one';\n$arg2 = 'two';\necho \"\\n-- Call printf with one argument less than expected --\\n\";\ntry {\n    var_dump( printf($format1) );\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump( printf($format2,$arg1) );\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump( printf($format3,$arg1,$arg2) );\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n-- Call printf with two argument less than expected --\\n\";\ntry {\n    var_dump( printf($format2) );\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump( printf($format3,$arg1) );\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n-- Call printf with three argument less than expected --\\n\";\ntry {\n    var_dump( printf($format3) );\n} catch (\\ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
