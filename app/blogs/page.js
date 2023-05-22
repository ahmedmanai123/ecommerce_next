import React from 'react';

const BlogPage = () => {
  return (
    <>
    <div className="container">
      <h1 className="page-title">Blog</h1>

      <div className="blog-list">
        <div className="blog-item">
          <h2 className="blog-title">L'écran borderless</h2>
          <p className="blog-date">Les smartphones aux écrans sans bordure sont à la mode ! Dénommé FullVIew chez Huawei (Mate 10 pro), la technologie est poussée à son paroxysme avec l’iPhone X et son écran à la résolution de 1125 x 2436. Le borderless se retrouve aussi chez les concurrents avec le Samsung S8 et le Honor 8 Pro.</p>
          <p className="blog-content"><img src="image/product1.jpg" alt="Description de l'image" width={800} height={100} /></p>
        </div>

        <div className="blog-item">
          <h2 className="blog-title">Le double objectif photo arrière</h2>
          <p className="blog-date">Les smartphones visent plus que jamais à rejoindre les appareils photo en termes de performances. Une belle invention pour les amateurs de photographie est celle du double objectif, qui permet d’améliorer la qualité des images, de faire des plans larges ou bien encore de créer un effet « bokeh ». Des appareils tels que le Huawei Mate 10 pro, le LG G6, le Honor 8 Pro et l’iPhone 7 disposent de cette technologie.</p>
          <p className="blog-content"><img src="image/product2.jpg" alt="Description de l'image" width={800} height={100} /></p>
        </div>

        <div className="blog-item">
          <h2 className="blog-title">La reconnaissance faciale</h2>
          <p className="blog-date">Vous trouverez toujours des articles en ligne évoquant des cas de « hacking », mais la reconnaissance faciale sur smartphone se perfectionne et apporte une vraie sécurité en plus d’un confort d’utilisation. Sur iPhone, Face Id. permet notamment de déverrouiller votre smartphone d’un regard, mais aussi de réaliser des paiements. Le Galaxy S8 ajoute à la reconnaissance faciale un scanner d’iris.</p>
          <p className="blog-content"><img src="image/product3.jpg" alt="Description de l'image" width={800} height={100} /></p>
        </div>
      </div>
    </div>
    <style>{` .container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.blog-list {
  display: grid;
  grid-gap: 20px;
}

.blog-item {
  background-color: #f4f4f4;
  padding: 20px;
}

.blog-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.blog-date {
  color: #888;
  margin-bottom: 5px;
}

.blog-content {
  line-height: 1.5;
}
`}</style>
  </>
  );
};

export default BlogPage;
