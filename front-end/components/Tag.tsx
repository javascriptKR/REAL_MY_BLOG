import TagType from '@/interface/projectT.interface'
import Link from 'next/link'

interface TagProp {
    text: TagType,
    key?: number;
}

const Tag = ({ text }: TagProp) => {

  return (
    <Link
      href={`/projects/${text.id}`}
      className="mr-3 text-xs font-medium uppercase px-3 py-1 bg-blue-200 text-blue-700 hover:text-blue-400 dark:bg-cyan-200 dark:text-cyan-700 dark:hover:text-cyan-400 rounded-full"
    >
        {text.name}
    </Link>
  )
}

export default Tag