// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/substr_replace_error.phpt
  it("Test substr_replace() function : error conditions", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing substr_replace() for error conditions\n*/\necho \"*** Testing substr_replace() : error conditions ***\\n\";\n$s1 = \"Good morning\";\necho \"\\n-- Testing substr_replace() function with start and length as arrays but string not--\\n\";\ntry {\n    var_dump(substr_replace($s1, \"evening\", array(5)));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(substr_replace($s1, \"evening\", 5, array(1)));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
