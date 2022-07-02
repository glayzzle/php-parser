// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/min.phpt
  it("min() tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(min(1));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(min(array()));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(min(new stdclass));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(min(2,1,2));\nvar_dump(min(2.1,2.11,2.09));\nvar_dump(min(\"\", \"t\", \"b\"));\nvar_dump(min(false, true, false));\nvar_dump(min(true, false, true));\nvar_dump(min(1, true, false, true));\nvar_dump(min(0, true, false, true));\n?>")).toMatchSnapshot();
  });
});
