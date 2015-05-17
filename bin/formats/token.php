<?php

  /**
   * Copyright (C) 2014 Glayzzle (BSD3 License)
   * @authors https://github.com/glayzzle/php-parser/graphs/contributors
   * @url http://glayzzle.com
   */
  $tokens = token_get_all(
    file_get_contents($argv[1])
  );
  $last = count($tokens) - 1;
  echo '[';
  foreach($tokens as $p => $t) {
    if (is_array($t)) {
      $t[0] = token_name($t[0]);
      $t[1] = utf8_encode($t[1]);
    }
    echo json_encode( $t );
    if ($p !== $last) {
      echo ',';
    }
  }
  echo ']';