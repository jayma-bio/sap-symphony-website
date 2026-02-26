import Link from "next/link"

const CopyRight = () => {
  return (
    <div className="w-full mx-auto max-w-screen-2xl flex items-center justify-between responsive-padding py-2 text-xs md:text-sm text-deep-gray">
      <span>@2026 Sap Symphony</span>
      <p>Developed by <Link href="https://www.exionstech.online/" className="underline font-semibold" target="_blank" rel="noopener noreferrer">Exions Tech</Link></p>
    </div>
  )
}

export default CopyRight
