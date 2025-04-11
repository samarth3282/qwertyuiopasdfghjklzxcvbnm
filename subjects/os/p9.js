// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
//FORK


  #include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/wait.h>

int main()
{
    pid_t pid;

    printf("Parent process started. PID: %d\n", getpid());

    
    pid = fork();
    
    if (pid < 0)
    {
        
        perror("fork failed");
        exit(1);
    }
    else if (pid == 0)
    {
        
        printf("Child process created. PID: %d\n", getpid());

        
        execlp("date", "date", NULL);
        

        
        perror("execlp failed");
        exit(1);
    }
    else
    {
        wait(NULL);
        printf("Child process completed. Parent exiting.\n");
    }

    return 0;
}`;
  res.json({ code: codeString });
});

module.exports = router;
