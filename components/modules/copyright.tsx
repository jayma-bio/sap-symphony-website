import Link from "next/link"

const CopyRight = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between px-5 md:px-14 py-2 text-xs md:text-sm text-deep-gray">
      <span>@2026 Sap Symphony</span>
      <p>Developed by <Link href="https://www.exionstech.online/" className="underline font-semibold" target="_blank" rel="noopener noreferrer">Exions Tech</Link></p>
    </div>
  )
}

export default CopyRight
