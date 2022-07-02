// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/max.phpt
  it("max() tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(max(1));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(max(array()));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(max(new stdclass));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(max(2,1,2));\nvar_dump(max(2.1,2.11,2.09));\nvar_dump(max(\"\", \"t\", \"b\"));\nvar_dump(max(false, true, false));\nvar_dump(max(true, false, true));\nvar_dump(max(1, true, false, true));\nvar_dump(max(0, true, false, true));\n?>")).toMatchSnapshot();
  });
});
