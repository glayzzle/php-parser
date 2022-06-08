// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_variation52.phpt
  it("Test sprintf() function : usage variations - typical format strings", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing sprintf() : with  typical format strings ***\\n\";\n// initialising required variables\n$tempnum = 12345;\n$tempstring = \"abcdefghjklmnpqrstuvwxyz\";\necho\"\\n-- Testing for '%%%.2f' as the format parameter --\\n\";\nvar_dump(sprintf(\"%%%.2f\", 1.23456789e10));\necho\"\\n-- Testing for '%%' as the format parameter --\\n\";\nvar_dump(sprintf(\"%%\", 1.23456789e10));\necho\"\\n-- Testing for precision value more than maximum --\\n\";\nvar_dump(sprintf(\"%.988f\", 1.23456789e10));\necho\"\\n-- Testing for invalid width(-15) specifier --\\n\";\ntry {\n    var_dump(sprintf(\"%030.-15s\", $tempstring));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho\"\\n-- Testing for '%X' as the format parameter --\\n\";\nvar_dump(sprintf(\"%X\", 12));\necho\"\\n-- Testing for multiple format parameters --\\n\";\nvar_dump(sprintf(\"%d  %s  %d\\n\", $tempnum, $tempstring, $tempnum));\necho\"\\n-- Testing for excess of mixed type arguments  --\\n\";\nvar_dump(sprintf(\"%s\", $tempstring, $tempstring, $tempstring));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
