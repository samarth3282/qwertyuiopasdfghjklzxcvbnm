// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
  //file system
  echo " "
echo "----Implementing Directory Management----"
echo " "
ch=0
while [ $ch -lt 10 ]
do
    echo "Press the following to :"
    echo "1) Create a new directory."
    echo "2) Modify a directory."
    echo "3) Navigate into a directory."
    echo "4) List directories."
    echo "5) Search for a directory."
    echo "6) Display directory size."
    echo "7) Show current path."
    echo "8) Count number of files/folders."
    echo "9) Change directory permissions."
    echo "10) Create a file."
    echo "11) Exit."
    read ch 

    case $ch in
    1) echo " "
    echo "---Creation of Directory---"
    echo " "
    echo "Enter the name of the directory:"
    read name 
    if [ -d "$name" ]; then
        echo "Directory already exists!"
    else
        mkdir $name
        echo "Directory '$name' created successfully."
    fi
    ;;
    2) echo " "
    echo "---Modification of Directory---"
    echo " "
    echo "Enter the directory to be modified:"
    read orgdir
    if [ ! -d "$orgdir" ]; then
        echo "Directory does not exist!"
    else
        echo "Press the following to :"
        echo " "
        echo "1) Rename directory."
        echo "2) Copy directory."
        echo "3) Move directory."
        echo "4) Delete directory."
        echo "5) Create a file inside directory."
        echo "6) Delete a file inside directory."
        echo "7) Exit from Modify Mode."
        read modch

        case $modch in
        1) echo " "
        echo "---Rename a directory---"
        echo " "
        echo "Enter new name for the directory:"
        read newname 
        mv $orgdir $newname 
        echo "Directory renamed to '$newname'."
        ;; 
        2) echo " "
        echo "---Copying a directory---"
        echo " "
        echo "Enter target directory:"
        read target
        cp -r $orgdir $target
        echo "Directory copied successfully."
        ;; 
        3) echo " "
        echo "---Moving a directory---"
        echo " "
        echo "Enter target directory:"
        read target 
        mv $orgdir $target 
        echo "Directory moved successfully."
        ;; 
        4) echo " "
        echo "---Deleting a directory---"
        echo " "
        rm -r $orgdir 
        echo "Directory deleted."
        ;; 
        5) echo " "
        echo "---Create a file inside directory---"
        echo " "
        echo "Enter the file name:"
        read filename
        touch "$orgdir/$filename"
        echo "File '$filename' created inside '$orgdir'."
        ;;
        6) echo " "
        echo "---Delete a file inside directory---"
        echo " "
        echo "Enter the file name:"
        read filename
        rm "$orgdir/$filename"
        echo "File '$filename' deleted from '$orgdir'."
        ;;
        7) echo "Exiting from modify mode."
        ;;
        esac
    fi
    ;; 
    3) echo "---Navigation of Directory---"
    echo " "
    echo "Enter the directory path to navigate to:"
    read path 
    if [ -d "$path" ]; then
        cd $path 
        pwd
    else
        echo "Directory does not exist!"
    fi
    ;; 
    4) echo "--- Listing of Directories---"
    echo " "
    ls -l | grep "^d"
    ;; 
    5) echo " "
    echo "---Search for a Directory---"
    echo " "
    echo "Enter the directory name to search:"
    read searchname
    find . -type d -name "$searchname"
    ;; 
    6) echo " "
    echo "---Display Directory Size---"
    echo " "
    echo "Enter directory name:"
    read dirname
    if [ -d "$dirname" ]; then
        du -sh "$dirname"
    else
        echo "Directory does not exist!"
    fi
    ;; 
    7) echo " "
    echo "---Show Current Path---"
    echo " "
    pwd
    ;; 
    8) echo " "
    echo "---Count Number of Files/Folders---"
    echo " "
    echo "Enter directory name:"
    read countdir
    if [ -d "$countdir" ]; then
        echo "Files: $(find "$countdir" -type f | wc -l)"
        echo "Folders: $(find "$countdir" -type d | wc -l)"
    else
        echo "Directory does not exist!"
    fi
    ;; 
    9) echo " "
    echo "---Change Directory Permissions---"
    echo " "
    echo "Enter directory name:"
    read perm_dir
    echo "Enter permissions (e.g., 755):"
    read perms
    chmod $perms "$perm_dir"
    echo "Permissions changed for '$perm_dir' to '$perms'."
    ;; 
    10) echo " "
    echo "---Create a File---"
    echo " "
    echo "Enter the file name:"
    read filename
    touch "$filename"
    echo "File '$filename' created successfully."
    ;; 
    11) echo " "
    echo "---Exiting---"
    echo " "
    exit
    ;; 
    esac
done

  
  `;
  res.json({ code: codeString });
});

module.exports = router;
