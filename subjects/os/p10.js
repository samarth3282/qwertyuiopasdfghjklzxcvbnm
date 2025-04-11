// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
//THREAD

  #include <stdio.h>
#include <stdlib.h>
#include <pthread.h>

#define NUM_THREADS 5

typedef struct
{
    int number;
    unsigned long long result;
    int thread_id;
} ThreadData;


void *sum_of_squares_thread(void *arg)
{
    ThreadData *data = (ThreadData *)arg;
    data->result = 0;

    for (int i = 1; i <= data->number; i++)
    {
        data->result += (unsigned long long)(i * i);
    }

    printf("Thread %d: Sum of squares up to %d is %llu\n", data->thread_id, data->number, data->result);
    pthread_exit(NULL);
}

int main()
{
    pthread_t threads[NUM_THREADS];
    ThreadData thread_data[NUM_THREADS];
    int numbers[NUM_THREADS] = {5, 7, 3, 6, 4};

    for (int i = 0; i < NUM_THREADS; i++)
    {
        thread_data[i].number = numbers[i];
        thread_data[i].thread_id = i + 1;

        if (pthread_create(&threads[i], NULL, sum_of_squares_thread, (void *)&thread_data[i]) != 0)
        {
            perror("Failed to create thread");
            return 1;
        }
    }

    for (int i = 0; i < NUM_THREADS; i++)
    {
        pthread_join(threads[i], NULL);
    }

    printf("\nAll threads completed.\n");
    return 0;
}
  `;
  res.json({ code: codeString });
});

module.exports = router;
