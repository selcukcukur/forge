"use client"

import { useState, useEffect } from "react"
import { Heart } from "lucide-react"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
  DrawerHeader
} from "@workspace/interface"

export function FooterHeart() {
  // State to track whether the "like" button has been pressed
  const [likeStatus, setLikeStatus] = useState(false)

  // State to control whether the drawer is open
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Load saved "like" state from local storage when the component mounts
  useEffect(() => {
    const saved = localStorage.getItem("liked")

    // If the saved value is "true", update the state accordingly
    if (saved === "true")
      setLikeStatus(true)
  }, [])

  // Handle the toggle action when the user clicks the "like" button
  const handleToggle = () => {
    // Only allow setting "like" once
    if (! likeStatus) {
      // Update the state to reflect the "liked" status
      setLikeStatus(true)

      // Save the "liked" status in local storage for persistence
      localStorage.setItem("liked", "true")

      // Open the drawer to show additional content or feedback
      setDrawerOpen(true)
    }
  }

  return (
    // Container
    <div className="flex text-xs text-muted-foreground">
      <div className="flex items-center gap-2">
        {/* Status */}
        <span className="relative flex h-2 w-2">
          {/* Pulse */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />

          {/* Dot */}
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>

        {/* Text */}
        made with

        {/* Portal */}
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          {/* Trigger */}
          <DrawerTrigger asChild>
            {/* Action */}
            <button onClick={handleToggle} className="focus:outline-none transition-transform duration-200 cursor-pointer" aria-label="Like">
              {/* Icon */}
              <Heart
                className={`size-4 ${likeStatus ? "text-primary" : "text-muted-foreground"} transition-colors duration-300`}
              />
            </button>
          </DrawerTrigger>

          {/* Content */}
          <DrawerContent>
            {/* Wrapper */}
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                {/* Title */}
                <DrawerTitle className="text-2xl font-bold tracking-wide text-center">
                  🎉 Congratulations 🎉
                </DrawerTitle>
              </DrawerHeader>

              <div className="flex flex-col items-center justify-center space-x-2 py-2">
                {/* Manifest */}
                <span className="text-muted-foreground text-left leading-relaxed space-y-4">
                  <p>You have stepped beyond the ordinary, into a realm where silence hums with possibility and every spark of thought carries the weight of creation.</p>
                  <p>Here, boundaries are illusions, time bends, and imagination is the only law. This is not a place you visit — it is a state you awaken to.</p>
                  <p>Carry this flame with you. Let it guide your craft, your code, your design. You are now part of the circle that dares to dream without limits.</p>
                </span>

                {/* Signature */}
                <div className="text-center font-mono text-xs text-muted-foreground opacity-70 py-6">
                  Selçuk Çukur — Chief Technology Officer (CTO)
                </div>
              </div>
            </div>
          </DrawerContent>
        </Drawer>

        {/* Text */}
        code
      </div>
    </div>
  )
}
