
import './App.css';
import qrcode from './images/image-qr-code.png'

function App() {
  return (
    <main className="App">
      <div className="img-container">
        <img src={qrcode} alt="qrcodeimage" />
      </div>
      <div className="content">
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to vist Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </main>
  );
}

export default App;
