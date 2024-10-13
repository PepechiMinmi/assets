import Head from "./components/Header";//ヘッダー
import Main from "./components/Main";//メインコンテンツ
import Foot from "./components/Footer";//フッター

export default function App() {
    return (
      <div>
        <Head />
        <Main />
        <Foot />
      </div>
    );
  }