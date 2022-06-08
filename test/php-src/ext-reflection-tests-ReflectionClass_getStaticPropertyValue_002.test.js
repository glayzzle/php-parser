// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getStaticPropertyValue_002.phpt
  it("ReflectionClass::getStaticPropertyValue() - bad params", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public static $x;\n}\n$rc = new ReflectionClass('C');\ntry {\n    var_dump($rc->getStaticPropertyValue(\"x\", \"default value\", 'blah'));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getStaticPropertyValue());\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getStaticPropertyValue(null));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getStaticPropertyValue(1.5, 'def'));\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    var_dump($rc->getStaticPropertyValue(array(1,2,3)));\n} catch (TypeError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
