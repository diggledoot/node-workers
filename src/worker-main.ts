import { Worker } from 'worker_threads'

export function runWorkers (): void {
  const workerPaths = ['./build/worker-task-1.js', './build/worker-task-2.js']
  const workers = workerPaths.map(path => new Worker(path))
}
