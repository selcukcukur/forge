// Array of quotes with text and author
const quotes = [
  { text: "A good programmer is someone who always looks both ways before crossing a one-way street.", author: "Doug Linder" },
  { text: "Optimism is an occupational hazard of programming; feedback is the treatment.", author: "Kent Beck" },
  { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { text: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
  { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
  { text: "Simplicity is prerequisite for reliability.", author: "Edsger Dijkstra" },
  { text: "Good code is its own best documentation.", author: "Steve McConnell" },
  { text: "The only way to go fast, is to go well.", author: "Robert C. Martin" },
  { text: "Debugging is twice as hard as writing the code in the first place.", author: "Brian Kernighan" },
  { text: "Programming isn’t about what you know; it’s about what you can figure out.", author: "Chris Pine" },
  { text: "The function of good software is to make the complex appear simple.", author: "Grady Booch" },
  { text: "The sooner you start to code, the longer the program will take.", author: "Roy Carlson" }
]

export function FooterInspiring() {
  // If there are no quotes, return nothing
  if (quotes.length === 0) return null

  // Select a random quote from the array
  const random = quotes[Math.floor(Math.random() * quotes.length)]!

  // Render the quote text in parentheses and the author after a dash
  return (
    <p className="text-xs text-muted-foreground/50 text-center sm:text-left font-mono italic">
      “{random.text}” — {random.author}
    </p>
  )
}
