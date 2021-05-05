import Link from 'next/link';

export default function MenuItem({menuEntry}) {
  return(
    <div className="hover:text-white cursor-pointer">
      <Link href={menuEntry.link}>{menuEntry.text}</Link>
    </div>
  )
}
