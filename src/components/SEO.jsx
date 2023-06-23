import Head from "next/head";

export default function SEO({
  title,
  description,
  image,
  url,
  pinColor,
  children,
}) {
  if (!title || !description || !image || !url || !pinColor) {
    console.error(
      "SEO component is missing one or more required props. Please check the docs."
    );
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/public/favicon.ico" />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={"website"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="theme-color" content={pinColor} />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color={pinColor} />
      {children}
    </Head>
  );
}
