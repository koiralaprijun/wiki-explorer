import Navbar from "@/app/components/Navbar"
import Nodes from "@/app/components/Nodes"
import ReadingList from "@/app/components/ReadingList"
import { Suspense } from "react"
import SearchResultsFallback from "@/app/components/SearchResultsFallback"
import Article from "@/app/components/Article"
import "@/app/CSS/page.css"

const WikiPage = ({ params }: { params: { title: string } }) => {
  const title = params.title

  return (
    <div className="main-body">
      <Navbar />
      <div className="flex gap-2 main-container px-12 mt-2">
        <div className="basis-1/4 border-2 bg-amber-100 border-gray-600">
          <Nodes />
        </div>
        <div className="w-7/12 p-4 overflow-auto">
          <div>
            <div className="p-4 text-5xl my-2 text-slate-800">
              {title}
            </div>
            <div className="p-4 my-5 bg-sky-200 text-black text-xl ">
              <Suspense fallback={<SearchResultsFallback />}>
                <Article title={title} />
              </Suspense>
            </div>
          </div>
        </div>
        <div className="basis-1/4 border-2 bg-amber-100 border-gray-600">
          <ReadingList />
        </div>
      </div>
    </div>
  )
}

export default WikiPage
