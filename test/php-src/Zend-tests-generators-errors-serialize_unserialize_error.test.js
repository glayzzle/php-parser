// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/errors/serialize_unserialize_error.phpt
  it("Generators can't be serialized or unserialized", function () {
    expect(parser.parseCode("<?php\nfunction gen() { yield; }\n$gen = gen();\ntry {\n    serialize($gen);\n} catch (Exception $e) {\n    echo $e, \"\\n\\n\";\n}\ntry {\n    var_dump(unserialize('O:9:\"Generator\":0:{}'));\n} catch (Exception $e) {\n    echo $e, \"\\n\\n\";\n}\ntry {\n    var_dump(unserialize('C:9:\"Generator\":0:{}'));\n} catch (Exception $e) {\n    echo $e;\n}\n?>")).toMatchSnapshot();
  });
});
