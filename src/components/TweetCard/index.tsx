import { formatDate } from "../../utils/helper";

interface Tweet {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

const TweetCard: React.FC<Tweet> = ({ id, author, content, updatedAt }) => {
  const editTweet = () => {
    console.log(id);
  };

  const deleteTweet = () => {
    console.log("djak");
  };

  return (
    <div className="border-b-2 p-2 my-2 relative">
      <div className="grid grid-cols-12 gap-0 mt-2 mb-2">
        <div className="col-span-1">
          <img
            className="inline-block h-[3.875rem] w-[3.875rem] rounded-full"
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
            alt="Image Description"
          ></img>
        </div>
        <div className="col-span-8 align-middle text-left">
          <div className="flex items-baseline gap-2">
            <h1 className="text-xl dark:text-white">{author}</h1>
            <h1 className="text-lg dark:text-gray-500">@{author}</h1>
            <h1 className="text-lg dark:text-gray-500">.</h1>
            <h2 className="text-sm dark:text-white">{formatDate(updatedAt)}</h2>
          </div>
          <p className="dark:text-white">{content}</p>
        </div>
      </div>

      <div className="absolute top-2 right-0 flex align-middle gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => editTweet()}
        >
          <path d="M5 0a1 1 0 011 1v14a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1h4zm14 4a1 1 0 011 1v14a1 1 0 01-1 1H11a1 1 0 01-1-1V5a1 1 0 011-1h7zm-3 4a1 1 0 110 2H8a1 1 0 110-2h8zm0 4a1 1 0 110 2H8a1 1 0 110-2h8z" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 cursor-pointer"
          viewBox="0 0 20 20"
          fill="currentColor"
          onClick={() => deleteTweet()}
        >
          <path
            fill-rule="evenodd"
            d="M13 2a1 1 0 011 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1h12zm-1 2H3a1 1 0 00-1 1v10a1 1 0 001 1h9.586l-1.293-1.293a1 1 0 011.414-1.414l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L11.586 15H3a3 3 0 01-3-3V6a3 3 0 013-3h9a1 1 0 110 2z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};
export default TweetCard;
