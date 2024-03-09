import Header from "@/components/Header"

export default async function Index() {
  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <div className="animate-in flex-1 flex items-center justify-center flex-col opacity-0 max-w-4xl px-3">
        <Header />
      </div>
    </div>
  )
}
