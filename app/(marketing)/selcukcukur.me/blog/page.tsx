import { PageHeader } from "page-header"
import { ArticleList } from "article-list";
import {posts} from "../../../../library/content";

export default function BlogPage() {
  const test = posts.getPages()


  return (
    <>
      <PageHeader
        subtitle = "Digital Journal"
        title = "Blog &"
        highlight = "Insights"
        description = "Technical deep-dives, experiments, and lessons learned from the digital laboratory. Exploring code, systems, and the craft of building software."
      />

      <section className="px-4 sm:px-6 py-16 sm:py-20 border-t border-border/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
            <ArticleList posts={test} />
          </div>
        </div>
      </section>
    </>
  )
}
