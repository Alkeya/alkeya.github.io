import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <link rel="stylesheet" href="/static/style/knacss.css" />
      <link rel="stylesheet" href="/static/style/style.css" />
    </Head>
    <div className="contenu large-w1140p">
      <header className="flex-container">
        <div className="logo"></div>
        <menu>Menu</menu>
      </header>

      <p className="accroche">En construction...</p>
    </div>
  </div>
);