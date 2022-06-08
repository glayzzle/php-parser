// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug76737.phpt
  it("Bug #76737: Unserialized reflection objects are broken, they shouldn't be serializable", function () {
    expect(parser.parseCode("<?php\ntry {\n    $r = new ReflectionClass('stdClass');\n    var_dump(serialize($r));\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $s = 'C:15:\"ReflectionClass\":0:{}';\n    var_dump(unserialize($s));\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $s = 'O:15:\"ReflectionClass\":0:{}';\n    var_dump(unserialize($s));\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
