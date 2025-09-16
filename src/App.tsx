import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>グラン・セレーノ メンズサロン</title>
        <meta name="description" content="富山市のグラン・セレーノ メンズサロン。予約はこちら。" />
        <meta name="google-site-verification" content="xxxxxxxxxxxx" />
      </Helmet>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">グラン・セレーノ メンズサロン</h1>
        <p className="text-lg text-gray-700">富山市のグラン・セレーノ メンズサロン。予約はこちら。</p>
      </div>
    </>
  );
}

export default App;
