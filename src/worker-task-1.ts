function taskForWorker1 (num: number): void {
  setTimeout(() => {
    console.log(`Iteration 1 ${num}`) //insert task to do
    taskForWorker1(num + 1)
  }, 1000)
}

taskForWorker1(1)
