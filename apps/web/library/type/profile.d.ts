/**
 * Type definition for user contact
 */
type Contact = {
  name: string
  type: "link" | "email" | "phone"
  value: string
}

/**
 * Type definition for user location
 */
type Location = {
  city: string
  country: string
  postalCode: string
  state: string
}

/**
 * Type definition for profile positions
 */
type Position = {
  id: number
  media?: string[]
  period?: {
    end?: string
    start?: string
  }
  skills?: string[]
  summary?: string
  title: string
}

/**
 * Type definition for profile experiences
 */
type Experience = {
  rank: number,
  company: string,
  location: string,
  type: "remote" | "full-time" | "part-time",
  summary: string,
  positions?: Position[]
}

/**
 * Type definition for profile relation
 */
type Relation = {
  id: number
  type: "company" | "position" | "education"
}

/**
 * Type definition for profile organizations
 */
type Language = {
  id: number
  name?: string
  level: "elementary" | "limited_working" | "professional_working" | "full_professional" | "native_or_bilingual"
}

/**
 * Type definition for profile organizations
 */
type Organization = {
  id: number
  image?: string
  name: string
  title: string
  period?: {
    start?: string
    end?: string
  }
  summary?: string
  relation?: Relation
  status?: boolean
}

/**
 * Type definition for profile organizations
 */
type Course = {
  id: number
  name?: string
  summary?: string
  relation?: Relation
}

/**
 * Type definition for user profile
 */
export interface Profile {
  avatar: string
  name: string
  title         : string
  sector        : string

  location?: Location
  contacts?: Contact[]

  experiences?: Experience[]

  courses?: Course[]
  languages?: Language[]
  organizations?: Organization[]
}
