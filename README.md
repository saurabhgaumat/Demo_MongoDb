

# ws_test_mongo

Prerequisites are:
  1. Latest version of node.js installed on the system.
  2. Mongodb version 3.4.x installed on the system.


## Usage
These are the web services created in this tutorial:

1. Create Database

  endpoint: /createDatabase
  method:POST

  request: {
    "db_name":"mongoTestDb"
  }

2. Create Collection

  endpoint: /createDatabase
  method:POST

  request: {
    "db_name":"mongoTestDb",
    "collection_name":"mongoTestCollection"
  }

3. Insert Documents

  endpoint: /insertDocuments
  method:POST

  request: {
    "db_name":"mongoTestDb",
    "collection_name":"mongoTestCollection",
    "documents":[
      {
        "employee_id":129951,
        "first_name":"Saurabh",
        "last_name":"Gaumat"
      },
      {
        "employee_id":129953,
        "first_name":"Jilani",
        "last_name":"Shaik"
      },
      {
        "employee_id":129955,
        "first_name":"Ramakrishnan",
        "last_name":"M"
      }
    ]
  }

4. Update Documents

  endpoint: /updateDocuments
  method:POST

  request: {
    "db_name":"mongoTestDb",
    "collection_name":"mongoTestCollection",
    "where_update":
    {
      "employee_id":129955
    },
    "what_update":
    {
      "first_name":"Madan",
      "last_name":"Dale"
    }
  }

5. Find Documents

  endpoint: /findDocuments
  method:POST

  request: {
    "db_name":"mongoTestDb",
    "collection_name":"mongoTestCollection"
  }

6. QueryDocuments

  endpoint: /queryDocuments
  method:POST

  request:{
    "db_name":"mongoTestDb",
    "collection_name":"mongoTestCollection",
    "query_params":
    {
      "first_name":"Saurabh"
    }
  }

7. FilterQueryDocuments

  endpoint: /filterQueryDocuments
  method:POST

  request:{
    "db_name":"mongoTestDb",
    "collection_name":"mongoTestCollection",
    "sort_order":
    {
      "employee_id":-1
    },
    "limit_count":2,
    "filter_params":
    {
      "emp_id_greater_than":129952,
      "emp_id_less_than":129955
    }
  }

8. AggregateDocuments

  endpoint: /aggregateDocuments
  method:POST

  request:{
    "db_name":"mongoTestDb",
    "collection_name":"mongoTestCollection",
    "aggregate_on":"location"
    }
  }

9. Delete Documents

  endpoint: /deleteDocuments
  method:POST

  request:{
    "db_name":"mongoTestDb",
    "collection_name":"mongoTestCollection",
    "where_delete":
    {
      "first_name":"Saurabh"
    }
  }

10. JoinCollections

  endpoint: /joinCollections
  method:POST

  request:{
    "db_name":"mongoTestDb",
    "collection_name":"mongoTestCollection",
    "lookup_collection_name":"ForLookUpCollection"
  }

11. Drop Collection

  endpoint: /dropDocuments
  method:POST

  request:request: {
    "db_name":"mongoTestDb",
    "collection_name":"TestCollection"
  }


## Developing



### Tools

Created with [Nodeclipse](https://github.com/Nodeclipse/nodeclipse-1)
 ([Eclipse Marketplace](http://marketplace.eclipse.org/content/nodeclipse), [site](http://www.nodeclipse.org))   

Nodeclipse is free open-source project that grows with your contributions.
