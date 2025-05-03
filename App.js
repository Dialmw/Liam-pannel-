
import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { useNavigate, BrowserRouter as Router, Route, Routes } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-10" style={{ backgroundImage: 'url("./liam_floating_text_background.png")', backgroundSize: "cover" }}>
      <h1 className="text-4xl font-bold mb-8 text-center text-purple-500">WhatsApp Bot Panel</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card onClick={() => window.open("https://youtube.com/@scionzice?si=s-gPs32U83xOrNNc", "_blank")} className="cursor-pointer hover:shadow-xl transition duration-300 bg-gray-900 border border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-purple-400">Watch Deployment Tutorial</h2>
            <p className="text-gray-400 mt-2">Step-by-step video guide to deploy your bot</p>
          </CardContent>
        </Card>

        <Card onClick={() => navigate("/session-id")} className="cursor-pointer hover:shadow-xl transition duration-300 bg-gray-900 border border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-purple-400">Get Session ID</h2>
            <p className="text-gray-400 mt-2">Enter your number to generate a session ID</p>
          </CardContent>
        </Card>

        <Card onClick={() => window.open("https://whatsapp.com/channel/0029Vb0nL2b3GJP1Yp2gvU3Q", "_blank")} className="cursor-pointer hover:shadow-xl transition duration-300 bg-gray-900 border border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-purple-400">Follow WhatsApp Channel</h2>
            <p className="text-gray-400 mt-2">Stay updated with announcements</p>
          </CardContent>
        </Card>

        <Card onClick={() => window.open("https://github.com/Dialmw/LIAM_Lux-MD/archive/refs/heads/main.zip", "_blank")} className="cursor-pointer hover:shadow-xl transition duration-300 bg-gray-900 border border-gray-700">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold text-purple-400">Download Bot Files</h2>
            <p className="text-gray-400 mt-2">Get the latest bot package</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function SessionIDPage() {
  const [phone, setPhone] = useState("");
  const [sessionId, setSessionId] = useState("");

  const generateSessionId = () => {
    if (!phone.match(/^\d{10,15}$/)) {
      alert("Please enter a valid phone number");
      return;
    }
    const id = Math.random().toString(36).substring(2, 10);
    setSessionId(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-6" style={{ backgroundImage: 'url("./liam_floating_text_background.png")', backgroundSize: "cover" }}>
      <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">Get Session ID</h2>
        <Input
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mb-4 bg-gray-800 border-gray-600 text-white"
        />
        <Button onClick={generateSessionId} className="w-full bg-gradient-to-r from-green-500 to-emerald-400 text-black font-semibold hover:brightness-110">
          Generate
        </Button>
        {sessionId && (
          <div className="mt-4 p-4 bg-gray-800 border border-gray-600 rounded-xl text-center">
            <p className="text-gray-400">Your Session ID:</p>
            <p className="text-xl font-mono text-green-400">{sessionId}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/session-id" element={<SessionIDPage />} />
      </Routes>
    </Router>
  );
}
