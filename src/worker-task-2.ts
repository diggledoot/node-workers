function taskForWorker2 (num: number): void {
  setTimeout(() => {
    console.log(`Iteration 2 ${num}`) //insert task to do
    taskForWorker2(num + 1)
  }, 1000)
}

taskForWorker2(1)
