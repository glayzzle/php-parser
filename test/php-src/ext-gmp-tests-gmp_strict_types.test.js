// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/gmp_strict_types.phpt
  it("GMP functions with strict_types=1", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nvar_dump(gmp_abs(gmp_init(-1)));\nvar_dump(gmp_abs(-1));\nvar_dump(gmp_abs(\"-1\"));\ntry {\n    gmp_abs(1.0);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    gmp_abs(false);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    gmp_abs(true);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    gmp_abs(null);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    gmp_abs([]);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
