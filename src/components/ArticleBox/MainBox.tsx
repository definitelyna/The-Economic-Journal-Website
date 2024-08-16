import style from "./MainBox.module.css";

type MainBoxProps = {
  isLoading: boolean;
  article: IArticleData;
};

// TypeScript interface to define the schema fields for Article
interface IArticleData  {
  authorUid: string;
  title: string;
  metaTitle: string;
  datePublished: Date;
  lastUpdated: Date;
  articleText: string;
  imageUrl?: string;
  summary?: string;
  articleBody: string;
  category: "Finance" | "Economic" | "Business" | "Entrepreneurship";
  likesCount: number;
}

function cropText(input: string) {
    if (!input) return undefined;

  const maxLength = 256;
  if (input.length > maxLength) {
    return input.slice(0, maxLength) + '...';
  }
  return input;
}

function MainBox({ isLoading, article }: MainBoxProps) {
  return (
    <div className={style.MainContentWrap}>
      <div className={style.MainContentBGRectangle} />
      <div className={style.MainContent}>
        {isLoading ? (
          <div className={`${style.skeleton} ${style.skeletonImg}`} />
        ) : (
          <img
            src={article.imageUrl || "https://biggardenfurniture.com.au/wp-content/uploads/2018/08/img-placeholder.png"}
            width="1024"
            height="645"
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        )}

        <div className={style.MainContentTextWrap}>
          {isLoading ? (
            <>
              <div className={`${style.skeleton} ${style.skeletonH1}`} />
              <div className={`${style.skeleton} ${style.skeletonH6}`} />
              <div className={`${style.skeleton} ${style.skeletonH6}`} />
              <div className={`${style.skeleton} ${style.skeletonH6}`} />
            </>
          ) : (
            <>
              <h1>{article.title || "No Title"}</h1>
              <h6>
                {(article.summary? cropText(article.summary): cropText(article.articleText)) || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque posuere egestas dui fermentum lobortis. Donec id consectetur odio, non consectetur lorem. Etiam nec ante sodales arcu vestibulum blandit. Suspendisse leo diam, cursus eu leo a, imperdiet congue ipsum. Quisque fermentum felis mauris, semper lacinia ipsum fringilla pellentesque. Aliquam lacinia fermentum dui rutrum semper. Maecenas id nulla sapien."}
              </h6>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainBox;
