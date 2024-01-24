import { useEffect, useState } from "react";
import { getTweets } from "../../utils/apis";
import TweetCard from "../../components/TweetCard";
import TweetInput from "../../components/TweetInput";
import { Tweet } from "../../utils/interfaces";
import { ToastContainer } from "react-toastify";
import Loader from "../../components/Loader";

function Home() {
  const [tweets, setTweets] = useState<Tweet[] | undefined>();
  const [detectChange, setDetectChange] = useState(false);
  const [loading, setLoading] = useState(true);

  const getTweetsData = async () => {
    setLoading(true);
    const response = await getTweets();
    setTweets(response.reverse());
    setLoading(false);
  };

  useEffect(() => {
    getTweetsData();
  }, [detectChange]);

  return (
    <div className="divide-y divide-slate-700 border-r-2 border-l-2 h-full border-slate-700">
      {/* <--- create tweet modal section ---> */}
      <TweetInput
        detectChange={detectChange}
        setDetectChange={setDetectChange}
      />

      {/* <--- loader ---> */}
      {loading && <Loader />}

      {/* <--- view tweets section ---> */}
      {tweets?.map((item) => (
        <TweetCard
          key={item.id}
          detectChange={detectChange}
          setDetectChange={setDetectChange}
          {...item}
        />
      ))}

      {/* <--- toast container to view toasts ---> */}
      <ToastContainer />
    </div>
  );
}

export default Home;
