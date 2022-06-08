// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_setStaticPropertyValue_002.phpt
  it("ReflectionClass::setStaticPropertyValue() - bad params", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public static $x;\n}\n$rc = new ReflectionClass('C');\ntry {\n    var_dump($rc->setStaticPropertyValue(\"x\", \"default value\", 'blah'));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->setStaticPropertyValue());\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->setStaticPropertyValue(null));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->setStaticPropertyValue(null,null));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->setStaticPropertyValue(1.5, 'def'));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->setStaticPropertyValue(array(1,2,3), 'blah'));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
