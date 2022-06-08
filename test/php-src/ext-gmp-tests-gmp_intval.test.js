// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_intval.phpt
  it("gmp_intval() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(gmp_intval(\"-1\"));\nvar_dump(gmp_intval(-1));\nvar_dump(gmp_intval(-2349828));\nvar_dump(gmp_intval(2342344));\n$g = gmp_init(\"12345678\");\nvar_dump(gmp_intval($g));\ntry {\n    var_dump(gmp_intval(\"\"));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(gmp_intval(new stdclass));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(gmp_intval(array()));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(gmp_intval(\"1.0001\"));\n} catch (ValueError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
