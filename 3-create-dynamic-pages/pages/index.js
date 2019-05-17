import Layout from '../components/MyLayout'
import Link from 'next/Link'

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello" />
        <PostLink title="Learn js is awesome" />
        <PostLink title="Deploys with zeit" />
      </ul>
    </Layout>
  )
}
