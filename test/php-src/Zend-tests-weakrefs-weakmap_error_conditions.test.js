// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/weakrefs/weakmap_error_conditions.phpt
  it("WeakMap error conditions", function () {
    expect(parser.parseCode("<?php\n$map = new WeakMap;\ntry {\n    $map[1] = 2;\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($map[1]);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    isset($map[1]);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    unset($map[1]);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $map[] = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $map[][1] = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump($map[new stdClass]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($map->prop);\nvar_dump(isset($map->prop));\nunset($map->prop);\ntry {\n    $map->prop = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $map->prop[] = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $r =& $map->prop;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    serialize($map);\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    unserialize('C:7:\"WeakMap\":0:{}');\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
