import { useEffect, useState } from "react";
import { getTweets } from "../../utils/apis";
import TweetCard from "../../components/TweetCard";
import TweetInput from "../../components/TweetInput";

interface Tweet {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

function Home() {
  const [tweets, setTweets] = useState<Tweet[] | undefined>();
  const [detectChange, setDetectChange] = useState(false);

  const getTweetsData = async () => {
    const response = await getTweets();
    setTweets(response.reverse());
  };

  useEffect(() => {
    getTweetsData();
  }, [detectChange]);

  return (
    <div className="container divide-y divide-slate-700 border-r-2 border-l-2 h-full border-slate-700">
      <TweetInput
        detectChange={detectChange}
        setDetectChange={setDetectChange}
      />
      {tweets?.map((item) => (
        <TweetCard key={item.id} detectChange={detectChange} setDetectChange={setDetectChange} {...item}  />
      ))}
    </div>
  );
}

export default Home;
