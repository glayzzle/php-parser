<?php

  /**
   * Copyright (C) 2014 Glayzzle (BSD3 License)
   * @authors https://github.com/glayzzle/php-parser/graphs/contributors
   * @url http://glayzzle.com
   */
  $tokens = token_get_all(
    file_get_contents($argv[1])
  );
  foreach($tokens as $p => $t) {
    if (is_array($t)) $tokens[$p][0] = token_name($t[0]);
  }
  echo json_encode( $tokens );
