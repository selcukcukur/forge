import { spawn } from "child_process"

// Get the command name from CLI arguments
const command = process.argv[2]

if (! command) {
  console.error('You need to provide a command name.')
  process.exit(1)
}

// Build the script path dynamically
const scriptPath = `./scripts/${command}/index.ts`

// Collect any additional arguments passed after the command
const scriptArgs = process.argv.slice(3)

// Spawn a child process to run the script with tsx
const child = spawn(
  'tsx',
  ['--stack-size=5120000', scriptPath, ...scriptArgs],
  {
    stdio: 'inherit', // Stream output directly to the parent process
    shell: true,      // Run the command in a shell-like environment
  }
)

// Handle errors during execution
child.on('error', (error) => {
  console.error(`Failed to execute script: ${error.message}`)
  process.exit(1)
})

// Exit with the same code as the child process
child.on('exit', (code) => {
  process.exit(code ?? 0)
})
