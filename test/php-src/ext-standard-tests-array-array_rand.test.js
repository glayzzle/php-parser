// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_rand.phpt
  it("array_rand() tests", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(array_rand(array()));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(array_rand(array(), 0));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(array_rand(array(1,2,3), 0));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(array_rand(array(1,2,3), -1));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(array_rand(array(1,2,3), 10));\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\nvar_dump(array_rand(array(1,2,3), 3));\nvar_dump(array_rand(array(1,2,3), 2));\n?>")).toMatchSnapshot();
  });
});
