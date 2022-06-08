// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_constructor_002.phpt
  it("ReflectionClass::__constructor() - bad arguments", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(new ReflectionClass());\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(new ReflectionClass(null));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(new ReflectionClass(true));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(new ReflectionClass(1));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(new ReflectionClass(array(1,2,3)));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(new ReflectionClass(\"stdClass\", 1));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(new ReflectionClass(\"X\"));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
