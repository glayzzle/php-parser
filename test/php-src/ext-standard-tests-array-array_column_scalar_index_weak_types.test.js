// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_column_scalar_index_weak_types.phpt
  it("Test array_column(): Index argument with various types in weak type mode", function () {
    expect(parser.parseCode("<?php\necho \"\\n-- Testing array_column() column key parameter should be a string or an integer (testing bool) --\\n\";\ntry {\n    var_dump(array_column([['php7', 'foo'], ['php8', 'bar']], false));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(array_column([['php7', 'foo'], ['php8', 'bar']], true));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing array_column() column key parameter should be a string or integer (testing array) --\\n\";\ntry {\n    var_dump(array_column([['php7', 'foo'], ['php8', 'bar']], array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing array_column() index key parameter should be a string or an integer (testing bool) --\\n\";\ntry {\n    var_dump(array_column([['php' => 7, 'foo'], ['php' => 8, 'bar']], 'php', false));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(array_column([['php' => 7, 'foo'], ['php' => 8, 'bar']], 'php', true));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\necho \"\\n-- Testing array_column() index key parameter should be a string or integer (testing array) --\\n\";\ntry {\n    var_dump(array_column([['php' => 7, 'foo'], ['php' => 8, 'bar']], 'php', array()));\n} catch (\\TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>\nDONE")).toMatchSnapshot();
  });
});
