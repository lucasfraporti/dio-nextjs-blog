import { getGlobalData } from '../../utils/global-data';
import { getPostBySlug } from '../../utils/mdx-utils';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

export default function PostPage({ posts, globalData }) {
  const post = posts[0];

  return (
    <Layout>
      <SEO
        title={`${post?.title} - ${globalData.name}`}
        description={post.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {post?.title}
          </h1>
          {post?.description && (
            <p className="text-xl mb-4">{post?.description}</p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark">{post.body}</article>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const posts = await getPostBySlug(params.id);

  return { props: { globalData, posts } };
};
