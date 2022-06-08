// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug41970.phpt
  it("Bug #41970 (call_user_func_*() leaks on failure)", function () {
    expect(parser.parseCode("<?php\n$a = array(4,3,2);\nvar_dump(call_user_func_array(\"sort\", array($a)));\ntry {\n    var_dump(call_user_func_array(\"strlen\", array($a)));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump(call_user_func(\"sort\", $a));\ntry {\n    var_dump(call_user_func(\"strlen\", $a));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
