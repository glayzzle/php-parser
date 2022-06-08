// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgetcsv_error_conditions.phpt
  it("Various fgetcsv() error conditions", function () {
    expect(parser.parseCode("<?php\n$file_name = __DIR__ . '/fgetcsv_error_conditions.csv';\n$file_handle = fopen($file_name, 'r');\n$length = 1024;\n$delimiter = ',';\n$enclosure = '\"';\necho 'fgetcsv() with negative length' . \\PHP_EOL;\ntry {\n    var_dump( fgetcsv($file_handle, -10) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( fgetcsv($file_handle, -10, $delimiter) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\ntry {\n    var_dump( fgetcsv($file_handle, -10, $delimiter, $enclosure) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho 'fgetcsv() with delimiter as empty string' . \\PHP_EOL;\ntry {\n    var_dump( fgetcsv($file_handle, $length, '', $enclosure) );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho 'fgetcsv() with enclosure as empty string' . \\PHP_EOL;\ntry {\n    var_dump( fgetcsv($file_handle, $length, $delimiter, '') );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\necho 'fgetcsv() with delimiter & enclosure as empty string' . \\PHP_EOL;\ntry {\n    var_dump( fgetcsv($file_handle, $length, '', '') );\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
