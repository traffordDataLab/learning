## Transact-SQL commands for discovering information about a SQL Server database
Items denoted by ```<...>``` should be replaced by relevant content, e.g. ```<ID>``` should be replaced by: 1, ```'<NAME>'``` should be replaced by 'dbo' etc.

### Discover schemas (users)
```SQL
SELECT schema_id, SCHEMA_NAME(schema_id) AS schema_name
FROM sys.objects
GROUP BY schema_id, SCHEMA_NAME(schema_id)
ORDER BY schema_id
```

### Discover all objects owned by a particular schema when you know the schema id
```SQL
SELECT *
FROM sys.objects
WHERE schema_id = <ID>
```

### Discover all objects owned by a particular schema when you know the schema name
```SQL
SELECT *
FROM sys.objects
WHERE schema_id = SCHEMA_ID('<NAME>')
```

### Discover all objects owned by all schemas without knowing schema id or schema name
NOTE: the ordering is optional but presents the information in a useful way. ```type_desc``` is the object's type description so this groups all like objects together.
```SQL
SELECT name, object_id, principal_id, schema_id, SCHEMA_NAME(schema_id) AS schema_name, parent_object_id, type, type_desc, create_date, modify_date, is_ms_shipped, is_published, is_schema_published
FROM sys.objects
ORDER BY schema_id, type_desc, name
```

### Discover a particular table's definition, i.e. column names, data types etc.
```SQL
SELECT *
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_NAME = '<NAME>'
```

### Discover all table definitions, ordered by database, owner, name and column ordinal
NOTE: the ordering is optional but helps group the results in an easy to digest way as this query can return a lot of rows.
```SQL
SELECT TABLE_CATALOG, TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME, ORDINAL_POSITION, COLUMN_DEFAULT, IS_NULLABLE, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH, CHARACTER_OCTET_LENGTH, NUMERIC_PRECISION, NUMERIC_PRECISION_RADIX, NUMERIC_SCALE, DATETIME_PRECISION, CHARACTER_SET_CATALOG, CHARACTER_SET_SCHEMA, CHARACTER_SET_NAME, COLLATION_CATALOG, COLLATION_SCHEMA, COLLATION_NAME, DOMAIN_CATALOG, DOMAIN_SCHEMA, DOMAIN_NAME
FROM INFORMATION_SCHEMA.COLUMNS
ORDER BY TABLE_CATALOG, TABLE_SCHEMA, TABLE_NAME, ORDINAL_POSITION
```
