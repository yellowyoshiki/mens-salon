import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet>
        <title>グラン・セレーノ メンズサロン｜富山市のリラクゼーション</title>
        <meta name="description" content="都会の喧騒から解き放たれる、富山市の癒しの空間『グラン・セレーノ』。落ち着いた雰囲気とプロの技術で最高のリラクゼーションを提供。" />
        <meta name="keywords" content="富山, メンズサロン, リラクゼーション, グラン・セレーノ" />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-4xl font-bold mb-4">グラン・セレーノ</h1>
        <p className="text-lg text-gray-700 mb-2">都会の喧騒から解き放たれる、癒しの空間へようこそ。</p>
        <p className="text-lg text-gray-700 mb-4">落ち着いた雰囲気とプロの技術で、最高のリラクゼーションをお届けします。</p>

        <div className="mb-4">
          <p>住所: 富山市赤田</p>
          <p>電話: 080-6246-6963</p>
          <p>求人: セラピスト募集中</p>
        </div>

        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-2">料金表</h2>
          <ul className="list-disc ml-6">
            <li>60分: 9,900円</li>
            <li>75分: 12,100円</li>
            <li>90分: 15,400円</li>
            <li>120分: 19,800円</li>
            <li>VIP延長料金: 20分 4,400円</li>
            <li>VIP指名料: 1,100円〜3,300円</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
