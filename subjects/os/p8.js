// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
  //fcfs
  #include <stdio.h>

struct Process {
    int id;     
    int arrival;    
    int burst;      
    int completion; 
    int waiting;    
    int turnaround;
};

void sortByArrival(struct Process p[], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (p[j].arrival > p[j + 1].arrival) {
                struct Process temp = p[j];
                p[j] = p[j + 1];
                p[j + 1] = temp;
            }
        }
    }
}

void displayGanttChart(struct Process p[], int n) {
    printf("\nGantt Chart:\n");

    printf(" ");
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < p[i].burst; j++) printf("--");
        printf(" ");
    }
    printf("\n|");

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < p[i].burst - 1; j++) printf(" ");
        printf("P%d", p[i].id);
        for (int j = 0; j < p[i].burst - 1; j++) printf(" ");
        printf("|");
    }
    printf("\n ");

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < p[i].burst; j++) printf("--");
        printf(" ");
    }

    printf("\n0");
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < p[i].burst; j++) printf("  ");
        printf("%d", p[i].completion);
    }
    printf("\n");
}

void fcfsScheduling(struct Process p[], int n) {
    int currentTime = 0;
    float totalWaiting = 0, totalTurnaround = 0;

    sortByArrival(p, n);

    for (int i = 0; i < n; i++) {
        if (currentTime < p[i].arrival) {
            currentTime = p[i].arrival; 
        }
        p[i].completion = currentTime + p[i].burst; 
        p[i].turnaround = p[i].completion - p[i].arrival; 
        p[i].waiting = p[i].turnaround - p[i].burst; 

        totalWaiting += p[i].waiting;
        totalTurnaround += p[i].turnaround;
        
        currentTime = p[i].completion;
    }

    printf("\nProcess\tArrival\tBurst\tCompletion\tTurnaround\tWaiting\n");
    for (int i = 0; i < n; i++) {
        printf("P%d\t%d\t%d\t%d\t\t%d\t\t%d\n",
               p[i].id, p[i].arrival, p[i].burst, p[i].completion,
               p[i].turnaround, p[i].waiting);
    }

    printf("\nAverage Waiting Time: %.2f\n", totalWaiting / n);
    printf("Average Turnaround Time: %.2f\n", totalTurnaround / n);

    displayGanttChart(p, n);
}

int main() {
    int n;

    printf("Enter the number of processes: ");
    scanf("%d", &n);

    struct Process p[n];

    printf("Enter Arrival Time and Burst Time for each process:\n");
    for (int i = 0; i < n; i++) {
        p[i].id = i + 1;
        printf("P%d Arrival Time: ", i + 1);
        scanf("%d", &p[i].arrival);
        printf("P%d Burst Time: ", i + 1);
        scanf("%d", &p[i].burst);
    }

    fcfsScheduling(p, n);

    return 0;
}
  `;
  res.json({ code: codeString });
});

module.exports = router;
