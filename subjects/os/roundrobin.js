// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

struct Process
{
    int pid, at, bt, rt, ct, tat, wt, original_bt;
};

int main()
{
    int n, tq;
    cout << "Enter the total number of processes: ";
    cin >> n;

    vector<Process> p(n);
    cout << "Enter Arrival Time and Burst Time for all processes:\n";
    for (int i = 0; i < n; i++)
    {
        cout << "Process " << i + 1 << " Arrival Time: ";
        cin >> p[i].at;
        cout << "Process " << i + 1 << " Burst Time: ";
        cin >> p[i].bt;

        p[i].pid = i + 1;
        p[i].rt = p[i].bt;
        p[i].original_bt = p[i].bt; // store original burst time for later display
    }

    cout << "Enter Time Quantum: ";
    cin >> tq;

    int time = 0, remain = n;
    double totalWT = 0, totalTAT = 0;
    vector<pair<int, int>> gantt; // {pid, time when it ends executing this slot}

    int last_pid = -1;

    for (int i = 0; remain != 0;)
    {
        bool done = true;

        if (p[i].rt > 0 && p[i].at <= time)
        {
            int exec_time = min(tq, p[i].rt);
            p[i].rt -= exec_time;
            time += exec_time;

            // Add to Gantt only if it’s a new execution or continued
            if (gantt.empty() || gantt.back().first != p[i].pid)
                gantt.emplace_back(p[i].pid, time);
            else
                gantt.back().second = time;

            if (p[i].rt == 0)
            {
                p[i].ct = time;
                p[i].tat = p[i].ct - p[i].at;
                p[i].wt = p[i].tat - p[i].original_bt;

                totalWT += p[i].wt;
                totalTAT += p[i].tat;

                remain--;
            }
        }

        // Move to next process
        bool nextFound = false;
        for (int j = 0; j < n; j++)
        {
            int next = (i + j + 1) % n;
            if (p[next].at <= time && p[next].rt > 0)
            {
                i = next;
                nextFound = true;
                break;
            }
        }

        if (!nextFound)
        {
            time++;
        }
    }

    // Display Gantt Chart
    cout << "\nGantt Chart:\n|";
    for (auto &entry : gantt)
        cout << " P" << entry.first << " |";
    cout << "\n0";
    for (auto &entry : gantt)
        cout << setw(5) << entry.second;

    // Display Process Table
    cout << "\n\nProcess\tAT\tBT\tCT\tTAT\tWT\n";
    for (auto &proc : p)
    {
        cout << "P" << proc.pid << "\t"
             << proc.at << "\t"
             << proc.original_bt << "\t"
             << proc.ct << "\t"
             << proc.tat << "\t"
             << proc.wt << "\n";
    }

    cout << fixed << setprecision(2);
    cout << "\nAverage Waiting Time: " << totalWT / n;
    cout << "\nAverage Turnaround Time: " << totalTAT / n << "\n";

    return 0;
}

  `;
  res.json({ code: codeString });
});

module.exports = router;
