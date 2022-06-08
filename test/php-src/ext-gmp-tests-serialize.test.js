// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gmp/tests/serialize.phpt
  it("GMP serialization and unserialization", function () {
    expect(parser.parseCode("<?php\nvar_dump($n = gmp_init(42));\nvar_dump($s = serialize($n));\nvar_dump(unserialize($s));\n$n = gmp_init(13);\n$n->foo = \"bar\";\nvar_dump($s = serialize($n));\nvar_dump(unserialize($s));\nvar_dump(unserialize('C:3:\"GMP\":15:{s:2:\"42\";a:0:{}}'));\ntry {\n    unserialize('C:3:\"GMP\":0:{}');\n} catch (Exception $e) { var_dump($e->getMessage()); }\ntry {\n    unserialize('C:3:\"GMP\":9:{s:2:\"42\";}');\n} catch (Exception $e) { var_dump($e->getMessage()); }\ntry {\n    unserialize('O:3:\"GMP\":0:{}');\n} catch (Exception $e) { var_dump($e->getMessage()); }\ntry {\n    unserialize('O:3:\"GMP\":1:{i:0;i:0;}');\n} catch (Exception $e) { var_dump($e->getMessage()); }\ntry {\n    unserialize('O:3:\"GMP\":1:{i:0;s:0:\"\";}');\n} catch (Exception $e) { var_dump($e->getMessage()); }\ntry {\n    unserialize('O:3:\"GMP\":2:{i:0;s:1:\"0\";i:1;i:0;}');\n} catch (Exception $e) { var_dump($e->getMessage()); }\n?>")).toMatchSnapshot();
  });
});
