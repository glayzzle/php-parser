// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getProperty_002.phpt
  it("ReflectionClass::getProperty() - error cases", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public $a;\n}\n$rc = new ReflectionClass(\"C\");\necho \"Check invalid params:\\n\";\ntry {\n    var_dump($rc->getProperty());\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getProperty(\"a\", \"a\"));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getProperty(null));\n} catch (exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getProperty(1));\n} catch (exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getProperty(1.5));\n} catch (exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getProperty(true));\n} catch (exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getProperty(array(1,2,3)));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getProperty(new C));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
