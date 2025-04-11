// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
  
//database
#!/bin/bash

create_database() {
    local database=$1
    if [ ! -d "$database" ]; then
        mkdir "$database"
        echo "Database '$database' created."
    else
        echo "Database '$database' already exists."
    fi
}

create_table() {
    local database=$1
    local table=$2
    local columns=$3

    if [ ! -d "$database" ]; then
        echo "Database does not exist."
        return
    fi

    if [ ! -f "$database/$table.txt" ]; then
        echo "$columns" >"$database/$table.txt"
        echo "Table '$table' created with columns: $columns"
    else
        echo "Table '$table' already exists."
    fi
}

insert_data() {
    local database=$1
    local table=$2
    local data=$3

    if [ ! -d "$database" ]; then
        echo "Database does not exist."
        return
    fi

    if [ ! -f "$database/$table.txt" ]; then
        echo "Table does not exist."
        return
    fi

    echo "$data" >>"$database/$table.txt"
    echo "Data inserted into table '$table'."
}

update_data() {
    local database=$1
    local table=$2
    local old_data=$3
    local new_data=$4

    if [ ! -d "$database" ]; then
        echo "Database does not exist."
        return
    fi

    if [ ! -f "$database/$table.txt" ]; then
        echo "Table does not exist."
        return
    fi

    sed -i "s/$old_data/$new_data/g" "$database/$table.txt"
    echo "Data updated in table '$table'."
}

delete_data() {
    local database=$1
    local table=$2
    local data=$3

    if [ ! -d "$database" ]; then
        echo "Database does not exist."
        return
    fi

    if [ ! -f "$database/$table.txt" ]; then
        echo "Table does not exist."
        return
    fi

    sed -i "/^$data$/d" "$database/$table.txt"
    echo "Data deleted from table '$table'."
}

display_data() {
    local database=$1
    local table=$2

    if [ ! -d "$database" ]; then
        echo "Database does not exist."
        return
    fi

    if [ ! -f "$database/$table.txt" ]; then
        echo "Table does not exist."
        return
    fi

    echo "Data from table '$table':"
    cat "$database/$table.txt"
}

rename_table() {
    local database=$1
    local old_table=$2
    local new_table=$3

    if [ ! -d "$database" ]; then
        echo "Database does not exist."
        return
    fi

    if [ ! -f "$database/$old_table.txt" ]; then
        echo "Table '$old_table' does not exist."
        return
    fi

    mv "$database/$old_table.txt" "$database/$new_table.txt"
    echo "Table '$old_table' renamed to '$new_table'."
}

search_data() {
    local database=$1
    local table=$2
    local data=$3

    if [ ! -d "$database" ]; then
        echo "Database does not exist."
        return
    fi

    if [ ! -f "$database/$table.txt" ]; then
        echo "Table does not exist."
        return
    fi

    grep "$data" "$database/$table.txt"
    echo "Search completed."
}

sort_table() {
    local database=$1
    local table=$2
    local column=$3

    if [ ! -d "$database" ]; then
        echo "Database does not exist."
        return
    fi

    if [ ! -f "$database/$table.txt" ]; then
        echo "Table does not exist."
        return
    fi

    (head -n 1 "$database/$table.txt" && tail -n +2 "$database/$table.txt" | sort -t, -k$column) >"$database/sorted_$table.txt"
    echo "Data sorted by column $column."
    cat "$database/sorted_$table.txt"
}

echo "DBMS Shell Script"
while true; do
    echo "1) Create Database"
    echo "2) Create Table"
    echo "3) Insert Data"
    echo "4) Update Data"
    echo "5) Delete Data"
    echo "6) Display Data"
    echo "7) Rename Table"
    echo "8) Search Data"
    echo "9) Sort Data"
    echo "10) Exit"
    read -p "Choose an option: " choice

    case $choice in
    1)
        read -p "Enter database name: " database
        create_database "$database"
        ;;
    2)
        read -p "Enter database name: " database
        read -p "Enter table name: " table
        read -p "Enter column names (comma-separated): " columns
        create_table "$database" "$table" "$columns"
        ;;
    3)
        read -p "Enter database name: " database
        read -p "Enter table name: " table
        read -p "Enter data to insert (comma-separated): " data
        insert_data "$database" "$table" "$data"
        ;;
    4)
        read -p "Enter database name: " database
        read -p "Enter table name: " table
        read -p "Enter old data: " old_data
        read -p "Enter new data: " new_data
        update_data "$database" "$table" "$old_data" "$new_data"
        ;;
    5)
        read -p "Enter database name: " database
        read -p "Enter table name: " table
        read -p "Enter data to delete: " data
        delete_data "$database" "$table" "$data"
        ;;
    6)
        read -p "Enter database name: " database
        read -p "Enter table name: " table
        display_data "$database" "$table"
        ;;
    7)
        read -p "Enter database name: " database
        read -p "Enter old table name: " old_table
        read -p "Enter new table name: " new_table
        rename_table "$database" "$old_table" "$new_table"
        ;;
    8)
        read -p "Enter database name: " database
        read -p "Enter table name: " table
        read -p "Enter data to search: " data
        search_data "$database" "$table" "$data"
        ;;
    9)
        read -p "Enter database name: " database
        read -p "Enter table name: " table
        read -p "Enter column number to sort by (starting from 1): " column
        sort_table "$database" "$table" "$column"
        ;;
    10)
        echo "Exiting..."
        exit 0
        ;;
    *)
        echo "Invalid option. Try again."
        ;;
    esac
done






  `;
  res.json({ code: codeString });
});

module.exports = router;
