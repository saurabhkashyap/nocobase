const postgres = {
  'character varying': 'string',
  varchar: 'string',
  character: 'string',
  text: 'text',
  char: 'string',
  oid: 'string',
  name: 'string',

  smallint: 'integer',
  integer: 'integer',
  bigint: 'bigInt',
  decimal: 'decimal',
  numeric: 'float',
  real: 'float',
  'double precision': 'float',

  'timestamp without time zone': 'date',
  'timestamp with time zone': 'date',
  'time without time zone': 'time',

  date: 'date',
  boolean: 'boolean',

  json: ['json', 'array'],
  jsonb: ['json', 'array', 'jsonb'],

  point: 'json',
  path: 'json',
  polygon: 'json',
  circle: 'json',
  uuid: 'string',
};

const mysql = {
  smallint: ['integer', 'boolean'],
  tinyint: ['integer', 'boolean'],
  mediumint: ['integer', 'boolean'],

  'smallint unsigned': ['integer', 'boolean'],
  'tinyint unsigned': ['integer', 'boolean'],
  'mediumint unsigned': ['integer', 'boolean'],

  char: 'string',
  date: 'date',
  time: 'time',
  varchar: 'string',
  text: 'text',
  longtext: 'text',
  int: 'integer',
  'int unsigned': 'integer',
  integer: 'integer',
  bigint: 'bigInt',
  'bigint unsigned': 'bigInt',
  float: 'float',
  double: 'float',
  boolean: 'boolean',
  decimal: 'decimal',

  datetime: 'date',
  timestamp: 'date',
  json: ['json', 'array'],
};

const sqlite = {
  text: 'text',
  varchar: 'string',

  integer: 'integer',
  real: 'real',

  datetime: 'date',
  date: 'date',
  time: 'time',

  boolean: 'boolean',

  numeric: 'decimal',
  json: ['json', 'array'],
};

export default { postgres, mysql, sqlite, mariadb: mysql };
