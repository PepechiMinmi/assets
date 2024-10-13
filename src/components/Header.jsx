import Nav from "./NavigationMenu";//ナビゲーションメニュー

export default function Header() {
    return(
        <header>
            <h1>Birdwatching</h1>
            <img src="dove.png" alt="a simple dove logo"></img>
            <Nav />
        </header>
    );
  }